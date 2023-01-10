import React, { useState } from "react";

function Navbar() {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((current) => !current);
  };
  return (
    <nav className="container">
      {active ? (
        <div className="absolute top-24 z-10 flex flex-col bg-background-dark text-2xl">
          <button className="p-6 border-b hover:bg-background-light ">
            Creatures
          </button>
          <button className="p-6 border-b hover:bg-background-light">
            Bosses
          </button>
          <button className="p-6 border-b hover:bg-background-light">
            NPCs
          </button>
          <button className="p-6 border-b hover:bg-background-light">
            Locations
          </button>
          <p className="text-sm p-2 text-center">
            Eldendex is a non-profit project made for educational purposes. All
            ELDEN RING™ copyrights belong to ©BANDAI NAMCO Entertainment Inc.
          </p>
        </div>
      ) : null}
      <div className="absolute top-10 right-10 z-10 p-2 hover:animate-pulse flex">
        <div className="space-y-2" onClick={toggleActive}>
          <span className="block w-8 h-1 bg-background-light "></span>
          <span className="block w-8 h-1 bg-background-light "></span>
          <span className="block w-8 h-1 bg-background-light "></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
