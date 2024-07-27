import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"; // Adjust the import path as necessary
import { Challenge1 } from "./challenges/challenge1";
import { Challenge2 } from "./challenges/challenge2";
import { Challenge3 } from "./challenges/challenge3";
import { Challenge4 } from "./challenges/challenge4";
import { Challenge5 } from "./challenges/challenge5";
import { Challenge6 } from "./challenges/challenge6";
import { Challenge7 } from "./challenges/challenge7";
import { Challenge8 } from "./challenges/challenge8";
import { Challenge9 } from "./challenges/challenge9";
import { Challenge10 } from "./challenges/challenge10";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/1" element={<Challenge1 />} />
        <Route path="/2" element={<Challenge2 />} />
        <Route path="/3" element={<Challenge3 />} />
        <Route path="/4" element={<Challenge4 />} />
        <Route path="/5" element={<Challenge5 />} />
        <Route path="/6" element={<Challenge6 />} />
        <Route path="/7" element={<Challenge7 />} />
        <Route path="/8" element={<Challenge8 />} />
        <Route path="/9" element={<Challenge9 />} />
        <Route path="/10" element={<Challenge10 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;