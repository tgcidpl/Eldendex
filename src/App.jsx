import React, { useState } from "react";
import MainBrowser from "./components/MainBrowser";
import Navbar from "./components/Navbar";

function App() {
  const [type, setType] = useState("creatures");

  return (
    <div className="container">
      <Navbar setType={setType} type={type} />
      <MainBrowser type={type} />
    </div>
  );
}

export default App;
