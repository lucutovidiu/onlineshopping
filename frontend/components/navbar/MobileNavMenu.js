import React from "react";
import Link from "next/link";
import { MenuNavItems } from "./MenuNavItems";
import useMobileStyles from "./Mobile_JSS_NavBar";
import MenuIcon from "@material-ui/icons/Menu";
import { Grid } from "@material-ui/core";

const MobileNavMenu = () => {
  const mobileClasses = useMobileStyles();
  // const { Home, Contact, SignIn, Discounts } = MenuNavItems();
  const [showDropDown, setShowDropDown] = React.useState(false);
  // console.log(desktopClasses.login_navbar_warpper);
  return (
    <>
      <nav className={mobileClasses.mobile_main_navbar_wrapper}>
        <div className="navbar_logo">
          <Link href="/">
            <a>Ovi Logo</a>
          </Link>
        </div>
        <div
          className="mobile_menu_btn"
          onClick={() => {
            setShowDropDown(state => !state);
          }}
        >
          <MenuIcon />
          <span>MENU</span>
        </div>
        <div
          className={
            showDropDown
              ? "dropDownMenu " + mobileClasses.showMobileNav
              : "dropDownMenu"
          }
        >
          <Grid container className="dropDownMenu_containter">
            {MenuNavItems().map((link, key) => {
              return (
                <Link key={key} href={link.navItemLink}>
                  <a>{link.navItemName.en}</a>
                </Link>
              );
            })}
          </Grid>
        </div>
      </nav>
    </>
  );
};

export default MobileNavMenu;
