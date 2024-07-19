import { useState } from "react";
import UpvoteButton from "./components/UpvoteButton";

function App() {

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <UpvoteButton />
      </div>
    </>
  );
}

export default App;
