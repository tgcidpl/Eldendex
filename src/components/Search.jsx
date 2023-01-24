import React, { useState } from "react";
import axios from "axios";

function Search({ type, setItemData, setLoading, setActive }) {
  const [searchActive, setSearchActive] = useState(false);

  const toggleSearchActive = () => {
    setSearchActive((current) => !current);
  };
  const handleSubmit = (e) => {
    e.preventDefault;

    if (searchField.value === "") {
      alert("Please enter a name to search for.");
      return;
    }
    let itemName = searchField.value.replace(" ", "%20");
    let itemUrl =
      `https://eldenring.fanapis.com/api/` + type + `?name=` + itemName;
    setLoading(true);
    axios
      .get(itemUrl)
      .then((res) => {
        setLoading(false);
        if (res.data.count === 0) {
          throw error;
        }
        setItemData(res.data.data[0]);
        setActive(true);
      })
      .catch(() => {
        setLoading(false);
        alert("Not Found! Please check your spelling and try again.");
      });
  };
  return (
    <div>
      <div
        className={`p-2 absolute top-[56%] left-4
      bg-background-dark rounded 
        ${searchActive ? "flex" : "hidden"}
      
      `}
      >
        <div className="flex flex-col gap-2 mx-1">
          <label className="sm:text-xl xl:text-2xl">Search {type} for:</label>
          <input
            className="p-1 sm:text-xl xl:text-2xl text-background-dark bg-background-light rounded"
            id="searchField"
          ></input>
          <button
            className="my-2 sm:text-xl xl:text-2xl  border-2 rounded hover:animate-pulse bg-background-dark"
            onClick={(e) => handleSubmit(e)}
          >
            Search
          </button>
          <button
            className="p-0.5 my-1 text-background-dark text-sm sm:text-lg xl:text-xl w-1/4 rounded bg-background-light hover:animate-pulse"
            onClick={toggleSearchActive}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="">
        <div
          className="p-2 hover:animate-pulse cursor-pointer"
          onClick={toggleSearchActive}
        >
          <svg
            className="h-8 w-8 fill-background-dark bg-background-light rounded"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971  23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Search;
