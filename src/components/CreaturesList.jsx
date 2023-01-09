import React from "react";

export default function CreaturesList({
  creatures,
  setCurrentCreature,
  setActive,
}) {
  return (
    <div className="relative m-2 text-lg">
      <ul>
        {creatures.map((c, index) => (
          <li className="p-1 hover:bg-background-light rounded" key={c.id}>
            <div
              onClick={() => {
                setCurrentCreature(index), setActive(true);
              }}
            >
              {c.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
