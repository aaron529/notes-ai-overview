import React, { useCallback, useEffect } from "react";
import PathUtils, { paths } from "@/utils/pathUtils";

function Board() {
  const { startPath, addPath, endPath, isDrawing, setIsDrawing, paths, path } =
    PathUtils();
  const handlePointerDown = (e) => {
    setIsDrawing(true);
    startPath(e.clientX, e.clientY);
    addPath(e.clientX, e.clientY);
  };

  const handlePointerMove = (e) => {
    if (!isDrawing) return;
    addPath(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    if (isDrawing) {
      setIsDrawing(false);
      endPath();
    }
    console.log("called up");
  };

  const handlePointerLeave = () => {
    if (isDrawing) {
      setIsDrawing(false);
      endPath();
    }
  };

  const d = useEffect(() => {
    console.log(paths.length);
  }, [isDrawing]);

  return (
    <div
      className="absolute inset-0 w-screen h-screen touch-none bg-neutral-900"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
    >
      <svg className="absolute inset-0 w-full h-full">
        {isDrawing && (
          <path
            d={path}
            stroke="white"
            strokeWidth="3"
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        )}
        {paths.length > 0 &&
          paths.map((p, index) => {
            return (
              <path
                key={index}
                d={p}
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            );
          })}
      </svg>
    </div>
  );
}

export default Board;
