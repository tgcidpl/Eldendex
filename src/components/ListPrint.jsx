import React from "react";

export default function ListPrint({ list, setActive, setItemData }) {
  return (
    <div className="relative m-2">
      <ul>
        {list.map((c, index) => (
          <li
            className="p-1 max-w-[400px] hover:bg-background-light rounded cursor-pointer sm:text-xl xl:text-2xl 2xl:max-w-[600px]"
            key={c.id}
          >
            <div
              onClick={() => {
                setItemData(list[index]), setActive(true);
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
