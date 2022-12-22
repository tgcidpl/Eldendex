import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center p-8 bg-slate-800 text-red-700 text-4xl">
      <h1>YOU DIED</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count} times
        </button>
      </div>
    </div>
  );
}

export default App;
