import React from "react";
import NoteEditBar from "@/components/NoteEditBar";
import { Textarea } from "@/components/ui/textarea";

function Note() {//
return (
    <>
        <div className="mr-auto ml-12 mt-4">
            <NoteEditBar />
        </div>
        <Textarea
            placeholder="Seems empty in here..."
            className="resize-none mx-auto my-4 w-11/12 h-screen"
        />
    </>
);
}

export default Note;
