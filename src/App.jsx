import React, { useState, useEffect } from "react";
import CreaturesList from "./components/CreaturesList";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [creatures, setCreatures] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentCreature, setCurrentCreature] = useState([0]);

  const currentPageUrl =
    `https://eldenring.fanapis.com/api/creatures?limit=16&page=` + currentPage;

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl).then((res) => {
      setLoading(false);
      setCreatures(res.data.data.map((c) => c));
    });
  }, [currentPage]);

  if (loading) return "Loading...";
  return (
    <div className="relative bg-gradient-to-b from-background-dark to-background-light h-[100vh] p-2">
      <CreaturesList creatures={creatures} />

      {!currentPage <= 0 && (
        <button
          className="border-2 px-2 m-2 bg-background-dark rounded text-lg shadow-lg hover:bg-background-light "
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous Page
        </button>
      )}
      {currentPage < 7 && (
        <button
          className="border-2 px-2 m-2 bg-background-dark rounded text-lg shadow-l hover:bg-background-light "
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next Page
        </button>
      )}
      <Card
        id={creatures[currentCreature].id}
        name={creatures[currentCreature].name}
        image={creatures[currentCreature].image}
        description={creatures[currentCreature].description}
        location={creatures[currentCreature].location}
        drops={creatures[currentCreature].drops}
      />
    </div>
  );
}

export default App;
