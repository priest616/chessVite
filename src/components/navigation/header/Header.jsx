import React, { useState } from "react";
import { header, subMenu } from "../Data";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSubmenu, setShowSubMenu] = useState(false);
  const [hoveredMenuItemIndex, setHoveredMenuItemIndex] = useState(null);

  return (
    <>
      <div className="flex items-center justify-between px-3 py-6 rounded">
        <div className="w-full">
          <img src="https://picsum.photos/50/30" className="rounded" alt="" />
        </div>
        <div className="flex w-full justify-evenly">
          {header.map((items, index) => (
            <React.Fragment key={index}>
              <Link
                to={items.path}
                className={`hover:font-[800] relative ${
                  hoveredMenuItemIndex === index ? "" : ""
                }`}
                onMouseEnter={() => {
                  if (items.menu === "Account") {
                    setShowSubMenu(true);
                  }
                  setHoveredMenuItemIndex(index);
                }}
                onMouseLeave={() => {
                  if (items.menu === "Account") {
                    setShowSubMenu(false);
                  }
                  setHoveredMenuItemIndex(null);
                }}
              >
                {items.menu}
                {hoveredMenuItemIndex === index && (
                  <div className="bottom-0 flex flex-col gap-1">
                    <div className="w-full h-[.2rem] bg-[#AC8D75]"></div>
                    <div className="w-1/2 h-[.2rem] bg-[#AC8D75]"></div>
                  </div>
                )}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
      {showSubmenu && (
        <div className="absolute right-[4.5rem] top-[4rem] flex flex-col">
          {subMenu.map((submenuItem, subIndex) => (
            <React.Fragment key={subIndex}>
              <p>{submenuItem.menu}</p>
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
