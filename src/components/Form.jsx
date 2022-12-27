import React from "react";
import axios from "axios";

const Form = () => {
  async function getCreature() {
    try {
      const response = await axios.get(
        "https://eldenring.fanapis.com/api/creatures",
        {
          params: {
            name: search.value,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col w-56">
      <label className="text-center">Creature Name:</label>
      <input className="border-2 border-gray-400 rounded" id="search"></input>
      <button className="hover:bg-orange-700 rounded" onClick={getCreature}>
        Search
      </button>
    </div>
  );
};

export default Form;
