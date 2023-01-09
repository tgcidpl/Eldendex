import React from "react";

export default function CreaturesList({ creatures }) {
  return (
    <div className="relative m-2 text-lg">
      <ul>
        {creatures.map((c) => (
          <li className="p-1 hover:bg-background-light rounded" key={c.id}>
            <span>{c.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
