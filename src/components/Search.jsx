import React from "react";
import axios from "axios";

function Search({ type, setItemData, setLoading, setActive }) {
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
    <div className="flex flex-col gap-2 mx-1">
      <label className="sm:text-xl xl:text-2xl">Search {type} for:</label>
      <input
        className="p-1 sm:text-xl xl:text-2xl sm:max-w-[50%] bg-background-dark rounded"
        id="searchField"
      ></input>
      <button
        className="my-2 sm:text-xl xl:text-2xl sm:max-w-[50%] border-2 rounded hover:animate-pulse bg-background-dark"
        onClick={(e) => handleSubmit(e)}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
