import React from "react";

function Card({ id, name, image, description, location, drops, setActive }) {
  return (
    <div className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-background-dark/75">
      <div className="absolute top-10 z-10 w-[96vw] mx-2 p-4 rounded-[5%] border-2 bg-background-dark text-lg leading-8">
        <h3 className="text-2xl font-bold">{name}</h3>
        <div className="flex justify-between items-center">
          <div
            className="w-52 h-52 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <button
            className="h-14 border-2 px-2 m-2 bg-background-dark rounded hover:bg-background-light "
            onClick={() => setActive(false)}
          >
            Close
          </button>
        </div>
        <p>{description}</p>
        <span>Location: {location}</span>
        <p>Drops: {drops}</p>
      </div>
    </div>
  );
}

export default Card;
