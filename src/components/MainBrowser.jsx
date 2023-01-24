import React, { useState, useEffect } from "react";
import ListPrint from "./ListPrint";
import axios from "axios";
import Card from "./Card";
import Search from "./Search";

function MainBrowser({ type }) {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const [itemData, setItemData] = useState(null);

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
      setList(res.data.data.map((c) => c));
    });
  }, [currentPage, type]);

  if (loading)
    return (
      <div className="h-[100vh] w-[100vw] bg-gradient-to-b from-background-dark to-background-light text-xl p-4 sm:mx-auto sm:max-w-[700px]">
        Loading...
      </div>
    );
  return (
    <div className="relative h-[100vh] sm:h-auto xl:h-[100vh] bg-gradient-to-b from-background-dark to-background-light p-2 container sm:mx-auto sm:max-w-[700px]">
      <ListPrint list={list} setActive={setActive} setItemData={setItemData} />
      <div className="flex">
        {!currentPage <= 0 && (
          <button
            className="border-2 px-2 m-2 bg-background-dark rounded text-lg shadow-lg hover:bg-background-light sm:text-2xl "
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous Page
          </button>
        )}
        {list.length === 16 && (
          <button
            className="border-2 px-2 m-2 bg-background-dark rounded text-lg shadow-l hover:bg-background-light sm:text-2xl "
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next Page
          </button>
        )}
        {list.length < 16 && (
          <button
            className="border-2 px-2 m-2 bg-background-dark rounded text-lg shadow-l hover:bg-background-light sm:text-2xl "
            onClick={() => setCurrentPage(currentPage === 0)}
          >
            First Page
          </button>
        )}
        <Search
          type={type}
          setItemData={setItemData}
          setLoading={setLoading}
          setActive={setActive}
        />
      </div>
      {active ? (
        <Card
          id={itemData.id}
          name={itemData.name}
          image={itemData.image}
          description={itemData.description}
          location={itemData.location}
          drops={itemData.drops}
          // id={list[currentItem].id}
          // name={list[currentItem].name}
          // image={list[currentItem].image}
          // description={list[currentItem].description}
          // location={list[currentItem].location}
          // drops={list[currentItem].drops}
          setActive={setActive}
        />
      ) : null}
    </div>
  );
}

export default MainBrowser;
