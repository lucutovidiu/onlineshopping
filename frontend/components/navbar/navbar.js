import React from "react";
import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  return (
    <>
      <DesktopNavMenu />
      <MobileNavMenu />
    </>
  );
};

export default Navbar;
