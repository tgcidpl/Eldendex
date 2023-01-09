import React from "react";

function Card({ id, name, image, description, location, drops }) {
  return (
    <div className="absolute top-0 left-0 p-4 bg-background-dark text-lg leading-8 hidden">
      <span>{name}</span>
      <div
        className="w-52 h-52 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <p>{description}</p>
      <span>Location: {location}</span>
      <p>Drops: {drops}</p>
    </div>
  );
}

export default Card;
