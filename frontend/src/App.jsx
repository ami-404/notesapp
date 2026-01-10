import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import NoteDetails from "./pages/NoteDetails";

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateNote />} />
      <Route path="/note/:id" element={<NoteDetails />} />
    </Routes>
    </div>
  );
};

export default App;
