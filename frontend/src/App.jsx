import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./routes/Home";
import Note from "./routes/Note";
import BlackBoard from "./routes/BlackBoard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/note/:noteid" element={<Note />} />
        </Route>
        <Route path="/blackboard" element={<BlackBoard />}></Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
