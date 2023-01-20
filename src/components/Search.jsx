import React from "react";

function Search({ type, itemData, setLoading }) {
  const handleSubmit = (e) => {
    e.preventDefault;
    let itemName = searchField.value;
    let itemUrl =
      `https://eldenring.fanapis.com/api/` + type + `?name=` + itemName;
    console.log(itemUrl);
    console.log("itemData:", itemData);
  };
  return (
    <div>
      <label>Search {type} for:</label>
      <input id="searchField"></input>
      <button onClick={(e) => handleSubmit(e)}>Search</button>
    </div>
  );
}

export default Search;
