import React from "react";

function Card({ id, name, image, description, location, drops }) {
  return (
    <div>
      <span>{name}</span>
      <div
        className="w-52 h-52 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <p>{description}</p>
      <span>{location}</span>
      <p>Drops: {drops}</p>
    </div>
  );
}

export default Card;
