import React, { useState } from "react";
import Creatures from "./components/Creatures";
import Navbar from "./components/Navbar";

function App() {
  const [type, setType] = useState("creatures");

  return (
    <div className="container">
      <Navbar />
      <Creatures type={type} />
    </div>
  );
}

export default App;
