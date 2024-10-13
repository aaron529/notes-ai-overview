from flask import Flask, jsonify, request
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, DeclarativeBase, mapped_column

class Base(DeclarativeBase):
  pass

db = SQLAlchemy(model_class=Base)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///notes.db"

db.init_app(app)

class Note(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column()
    desc: Mapped[str] = mapped_column()
    date_created: Mapped[datetime] = mapped_column(default=datetime.now)

    def __repr__(self) -> str:
        return f"{self.id} - {self.title}"

@app.route("/api/notes", methods=['GET', 'POST'])
def retreive_notes():
    if request.method == "POST":
        note = Note(title="This is title", desc="This is description")
        db.session.add(note)
        db.session.commit()
        return f"Created note by id = {note.id}"
    
    notes = Note.query.all()
    notes_list = [{"id": n.id, "title": n.title, "desc": n.desc, "date_created": n.date_created} for n in notes]
    return jsonify(notes_list)

@app.route("/api/notes/<int:id>", methods=['GET'])
def retreive_note_data(id):
    data = Note.query.get_or_404(id)
    return jsonify({"id": data.id, "title": data.title, "desc": data.desc, "date_created": data.date_created})

if __name__ == "__main__":
    app.run(debug=True, port=4000)

"""
GET /api/notes - Returns all notes
GET /api/notes/:id - Retrieve a specific note
POST /api/notes - Creates a note
PUT /api/notes - Update existing note
DELETE /api/notes/:id - Delete a note
"""