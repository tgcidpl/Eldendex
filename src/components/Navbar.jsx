import React, { useState } from "react";

function Navbar({ setType, type }) {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((current) => !current);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setType(e.target.innerHTML.toLowerCase());
    setActive((current) => !current);
  };

  return (
    <nav className="container">
      {active ? (
        <div className="absolute top-24 z-10 flex flex-col sm:right-0 bg-background-dark text-2xl sm:max-w-[460px]">
          <button
            className="p-6 border-b hover:bg-background-light "
            onClick={handleChange}
          >
            Creatures
          </button>
          <button
            className="p-6 border-b hover:bg-background-light"
            onClick={handleChange}
          >
            Bosses
          </button>
          <button
            className="p-6 border-b hover:bg-background-light"
            onClick={handleChange}
          >
            NPCs
          </button>
          <button
            className="p-6 border-b hover:bg-background-light"
            onClick={handleChange}
          >
            Locations
          </button>
          <p className="text-sm p-2 text-center">
            Eldendex is a non-profit project made for educational purposes. All
            ELDEN RING™ copyrights belong to ©BANDAI NAMCO Entertainment Inc.
          </p>
        </div>
      ) : null}
      <div className="absolute top-10 right-10 z-10 p-2 hover:animate-pulse flex sm:right-60">
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
