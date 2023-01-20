import React, { useState, useEffect } from "react";
import axios from "axios";

function Search({
  setCurrentItem,
  currentItem,
  list,
  setList,
  type,
  setLoading,
}) {
  const handleOnChange = (e) => {
    e.preventDefault();
    let searchItem =
      `https://eldenring.fanapis.com/api/` + type + searchField.value;
    console.log(searchItem);

    console.log("list:", list);
    let input = searchField.value;
    console.log("input:", input);
    // need to change filter

    const newArray = list.filter((el) => {
      el.name === input;
    });
    console.log("newArray:", newArray);
    setList(newArray);
    console.log("list:", list);
  };
  return (
    <div>
      <span>Search {type} for:</span>
      <input id="searchField" onKeyUp={(e) => handleOnChange(e)}></input>
    </div>
  );
}

export default Search;
