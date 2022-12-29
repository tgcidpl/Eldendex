import React, { useState, useEffect } from "react";
import CreatureList from "./components/CreatureList";
import axios from "axios";

function App() {
  const [creature, setCreature] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const currentPageUrl =
    `https://eldenring.fanapis.com/api/creatures?limit=20&page=` + currentPage;

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl).then((res) => {
      setLoading(false);
      setCreature(res.data.data.map((c) => c));
    });
  }, [currentPage]);

  if (loading) return "Loading...";

  return (
    <div>
      <CreatureList creature={creature} />
      {!currentPage <= 0 && (
        <button
          className="border-2 p-1 m-2 border-gray-400 rounded"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous Page
        </button>
      )}
      {currentPage < 5 && (
        <button
          className="border-2 p-1 m-2 border-gray-400 rounded"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next Page
        </button>
      )}
    </div>
  );
}

export default App;
