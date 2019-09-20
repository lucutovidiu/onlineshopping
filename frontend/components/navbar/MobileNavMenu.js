import React from "react";
import Link from "next/link";
import { MenuNavItems } from "./MenuNavItems";
import useMobileStyles from "./Mobile_JSS_NavBar";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Grid, Typography, Box } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const MobileNavMenu = () => {
  const mobileClasses = useMobileStyles();
  // const { Home, Contact, SignIn, Discounts } = MenuNavItems();
  const [showDropDown, setShowDropDown] = React.useState(false);
  function toggleMenu() {
    setShowDropDown(state => !state);
  }
  // console.log(desktopClasses.login_navbar_warpper);
  return (
    <>
      <nav className={mobileClasses.mobile_main_navbar_wrapper}>
        <div className="navbar_logo">
          <Link href="/">
            <a>Ovi Logo</a>
          </Link>
        </div>
        <div className="mobile_menu_btn" onClick={toggleMenu}>
          <MenuIcon />
          <span>MENU</span>
        </div>
        <div className="shopping_cart_menu">
          <FavoriteBorderIcon fontSize="large" />
          <ShoppingCartIcon fontSize="large" />
          <LanguageIcon fontSize="large" />
          <Typography>EN</Typography>
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
          <Box onClick={toggleMenu} textAlign="center">
            <ExpandLessIcon />
          </Box>
        </div>
      </nav>
    </>
  );
};

export default MobileNavMenu;
