import React from "react";
import Board from "@/components/Board";

function BlackBoard() {
  return (
    <div className="absolute inset-0 w-screen h-screen">
      <Board />
    </div>
  );
}

export default BlackBoard;
