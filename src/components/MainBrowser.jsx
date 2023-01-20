import React, { useState, useEffect } from "react";
import ListPrint from "./ListPrint";
import axios from "axios";
import Card from "./Card";
import Search from "./Search";

function MainBrowser({ type }) {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState([0]);
  const [active, setActive] = useState(false);

  const [fullTypeList, setFullTypeList] = useState([]);

  let typeUrl = `https://eldenring.fanapis.com/api/` + type;

  console.log("typeUrl:", typeUrl);

  useEffect(() => {
    setLoading(true);
    axios.get(typeUrl).then((res) => {
      setLoading(false);
      setFullTypeList(res.data.data.map((c) => c));
      console.log("fullTypeList:", fullTypeList);
    });
  }, [currentPage, type]);

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
      <ListPrint
        list={list}
        setCurrentItem={setCurrentItem}
        setActive={setActive}
      />

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
      {active ? (
        <Card
          id={list[currentItem].id}
          name={list[currentItem].name}
          image={list[currentItem].image}
          description={list[currentItem].description}
          location={list[currentItem].location}
          drops={list[currentItem].drops}
          setActive={setActive}
        />
      ) : null}
      <Search
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
        list={list}
        setList={setList}
        type={type}
        setLoading={setLoading}
      />
    </div>
  );
}

export default MainBrowser;
