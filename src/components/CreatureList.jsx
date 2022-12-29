import React from "react";

export default function CreatureList({ creature }) {
  return (
    <ul>
      {creature.map((c) => (
        <li key={c.id}>
          <span>{c.name}</span>
        </li>
      ))}
    </ul>
  );
}
