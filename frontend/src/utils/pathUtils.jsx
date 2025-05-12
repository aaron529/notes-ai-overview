import { useState } from 'react';
export const paths = [];

function pathUtils() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [path, setPath] = useState("");

  const addPath = (x, y) => {
    setPath((prevPath) => `${prevPath} L ${x} ${y}`);
  };

  const startPath = (x, y) => {
    setPath((prevPath) => `${prevPath} M ${x} ${y}`);
  };

  const endPath = () => {
    paths.push(path);
    setPath("");
  }

  return {
    isDrawing,
    setIsDrawing,
    path,
    addPath,
    startPath,
    endPath,
    paths,
  };
};

export default pathUtils;