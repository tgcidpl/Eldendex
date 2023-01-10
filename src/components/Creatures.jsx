import React, { useState, useEffect } from "react";
import CreaturesList from "./CreaturesList";
import axios from "axios";
import Card from "./Card";

function Creatures({ type }) {
  const [creatures, setCreatures] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentCreature, setCurrentCreature] = useState([0]);
  const [active, setActive] = useState(false);

  let currentPageUrl =
    `https://eldenring.fanapis.com/api/` +
    type +
    `?limit=16&page=` +
    currentPage;

  // below request activates upon currentPage change via pagination or type change via Navbar.

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl).then((res) => {
      setLoading(false);
      setCreatures(res.data.data.map((c) => c));
    });
  }, [currentPage, type]);

  if (loading)
    return (
      <div className="h-[100vh] w-[100vw] bg-gradient-to-b from-background-dark to-background-light text-xl p-4 sm:mx-auto sm:max-w-[700px]">
        Loading...
      </div>
    );
  return (
    <div className="relative bg-gradient-to-b from-background-dark to-background-light h-[100vh] p-2 container sm:mx-auto sm:max-w-[700px]">
      <CreaturesList
        creatures={creatures}
        setCurrentCreature={setCurrentCreature}
        setActive={setActive}
      />

      {!currentPage <= 0 && (
        <button
          className="border-2 px-2 m-2 bg-background-dark rounded text-lg shadow-lg hover:bg-background-light "
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous Page
        </button>
      )}
      {creatures.length === 16 && (
        <button
          className="border-2 px-2 m-2 bg-background-dark rounded text-lg shadow-l hover:bg-background-light "
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next Page
        </button>
      )}
      {active ? (
        <Card
          id={creatures[currentCreature].id}
          name={creatures[currentCreature].name}
          image={creatures[currentCreature].image}
          description={creatures[currentCreature].description}
          location={creatures[currentCreature].location}
          drops={creatures[currentCreature].drops}
          setActive={setActive}
        />
      ) : null}
    </div>
  );
}

export default Creatures;
