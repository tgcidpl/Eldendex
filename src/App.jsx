import React, { useState } from "react";
import Creatures from "./components/Creatures";

function App() {
  const [type, setType] = useState("creatures");

  return <Creatures type={type} />;
}

export default App;
