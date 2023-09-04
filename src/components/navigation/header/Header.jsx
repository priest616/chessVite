import React, { useState } from "react";
import { header, subMenu } from "../Data";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import Zoom from "react-reveal/Zoom";

const Header = () => {
  const [showSubmenu, setShowSubMenu] = useState(false);
  const [hoveredMenuItemIndex, setHoveredMenuItemIndex] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-between px-3 py-6 rounded lg:flex-row lg:items-center">
        <div className="flex items-center justify-between ">
          <img src="https://picsum.photos/50/30" className="rounded" alt="" />
          <div className="flex lg:hidden text-[2rem]">
            <CgMenuRight onClick={() => setMobileMenu(!mobileMenu)} />
          </div>
        </div>
        <div className="my-4 rounded lg:bg-inherit lg:w-2/3">
          <Zoom>
            <div
              className={`flex flex-col items-end w-full lg:flex lg:justify-evenly lg:flex-row ${
                mobileMenu ? "block" : "hidden"
              } gap-3 p-5`}
            >
              {header.map((items, index) => (
                <React.Fragment key={index}>
                  <Link
                    to={items.path}
                    className={` ${hoveredMenuItemIndex === index ? "" : ""}`}
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
                    onClick={() => setMobileMenu(!mobileMenu)}
                  >
                    <div className="flex flex-col items-center">
                      {items.menu}
                      {items.menu === "Account" && (
                        <div className="mt-5">
                          {subMenu.map((submenuItem, subIndex) => (
                            <React.Fragment key={subIndex}>
                              <Link to={submenuItem.path}>
                                <p
                                  className="p-1 px-2 my-1 border rounded-sm"
                                  onClick={() => setShowSubMenu(!showSubmenu)}
                                >
                                  {submenuItem.menu}
                                </p>
                              </Link>
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                    {hoveredMenuItemIndex === index && index !== 5 && (
                      <div className="relative bottom-0 flex flex-col gap-1">
                        <div className="w-full h-[.2rem] bg-[#AC8D75] absolute"></div>
                        <div className="w-1/2 h-[.2rem] bg-[#AC8D75] absolute top-[0.3rem]"></div>
                      </div>
                    )}

                    {hoveredMenuItemIndex === 5 && showSubmenu && (
                      <div
                        className={` flex-col  ${
                          index === 5 ? "absolute" : "hidden"
                        }`}
                      >
                        {subMenu.map((submenuItem, subIndex) => (
                          <React.Fragment key={subIndex}>
                            <Link to={submenuItem.path}>
                              <p
                                className="p-1 my-1 border rounded-sm"
                                onClick={() => setShowSubMenu(!showSubmenu)}
                              >
                                {submenuItem.menu}
                              </p>
                            </Link>
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </Zoom>
        </div>
      </div>
    </>
  );
};

export default Header;
