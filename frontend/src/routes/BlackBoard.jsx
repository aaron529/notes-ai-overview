import { useRef, useState, useEffect } from "react";

function BlackBoard() {
  const canvasRef = useRef(null);
  const [drawingStatus, setDrawingStatus] = useState(false);

  function startDrawing(e) {
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setDrawingStatus(true);
  }

  function stopDrawing() {
    setDrawingStatus(false);
  }

  function draw(e) {
    if (!drawingStatus) {
      return;
    }

    const ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = "white";
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  }

  useEffect(() => {
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineWidth = 3;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
      className="bg-neutral-900"
    ></canvas>
  );
}

export default BlackBoard;
