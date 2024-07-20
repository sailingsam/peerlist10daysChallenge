import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"; // Adjust the import path as necessary
import { Challenge1 } from "./challenges/challenge1";
import { Challenge2 } from "./challenges/challenge2";
import { Challenge3 } from "./challenges/challenge3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/1" element={<Challenge1 />} />
        <Route path="/2" element={<Challenge2 />} />
        <Route path="/3" element={<Challenge3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;