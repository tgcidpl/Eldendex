import React from "react";

export default function CreaturesList({ creatures }) {
  return (
    <div className="h-[80vh]">
      <ul>
        {creatures.map((c) => (
          <li className="p-1" key={c.id}>
            <span>{c.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
