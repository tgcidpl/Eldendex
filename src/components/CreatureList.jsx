import React from "react";

export default function CreatureList({ creature }) {
  return (
    <div>
      {creature.map((c) => (
        <div key={c.id}>{c.name}</div>
      ))}
    </div>
  );
}
