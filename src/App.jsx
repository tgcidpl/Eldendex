import React, { useState, useEffect } from "react";
import CreaturesList from "./components/CreaturesList";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [creatures, setCreatures] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const currentPageUrl =
    `https://eldenring.fanapis.com/api/creatures?limit=16&page=` + currentPage;

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl).then((res) => {
      setLoading(false);
      setCreatures(res.data.data.map((c) => c));
    });
  }, [currentPage]);

  const filteredCreatures = creatures.filter(
    (c) => c.id === `17f69ee8f6el0i6ysmpe59c9uqwri4`
  );

  if (loading) return "Loading...";
  return (
    <div>
      <CreaturesList creatures={creatures} />
      {!currentPage <= 0 && (
        <button
          className="border-2 p-1 m-2 border-gray-400 rounded"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous Page
        </button>
      )}
      {currentPage < 7 && (
        <button
          className="border-2 p-1 m-2 border-gray-400 rounded"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next Page
        </button>
      )}
      <Card
        id={filteredCreatures[0].id}
        name={filteredCreatures[0].name}
        image={filteredCreatures[0].image}
        description={filteredCreatures[0].description}
        location={filteredCreatures[0].location}
        drops={filteredCreatures[0].drops}
      />
    </div>
  );
}

export default App;
