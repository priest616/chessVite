import React, { useState } from "react";
import { header, subMenu } from "../Data";

const Header = () => {
  const [showSubmenu, setShowSubMenu] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-3 py-6 rounded">
        <div className="w-full">
          <img src="https://picsum.photos/50/30" className="rounded" alt="" />
        </div>
        <div className="flex w-full justify-evenly">
          {header.map((items, index) => (
            <React.Fragment key={index}>
              <p
                className="hover:font-[800] hover:underline decoration-double"
                onClick={() => {
                  if (items.menu === "Account") {
                    setShowSubMenu(!showSubmenu);
                  }
                }}
              >
                {items.menu}
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
      {showSubmenu && (
        <div
          className="absolute right-[4.5rem] top-[4rem] flex flex-col"
        >
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
