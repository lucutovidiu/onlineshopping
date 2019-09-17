import React from "react";
import Link from "next/link";
import { Input, Typography, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useDesktopStyles from "./Desktop_JSS_NavBar";
import useMobileStyles from "./Mobile_JSS_NavBar";

const menu_items = {
  Home: "/",
  Contact: "/Contact",
  Discounts: "/Discounts",
  SignIn: "/Login"
};

const Navbar = () => {
  const desktopClasses = useDesktopStyles();
  const mobileClasses = useMobileStyles();
  // console.log(desktopClasses.login_navbar_warpper);

  return (
    <>
      <div className={desktopClasses.login_navbar_warpper}>
        <Link href="#?">
          <a>help / support</a>
        </Link>
        <Link href={menu_items.SignIn}>
          <a>sign in</a>
        </Link>
        <Link href="#?">
          <a>sign up</a>
        </Link>
      </div>
      <nav className={desktopClasses.main_navbar_wrapper}>
        <div className="menu_left">
          <div className="navbar_main_menu-list">
            <div className="navbar_logo">
              <Link href={menu_items.Home}>
                <a>Ovi Logo</a>
              </Link>
            </div>
            <Link href={menu_items.Home}>
              <a className={desktopClasses.nav_link}>Home</a>
            </Link>
            <Link href={menu_items.Discounts}>
              <a className={desktopClasses.nav_link}>Discounts</a>
            </Link>
            <Link href={menu_items.Contact}>
              <a className={desktopClasses.nav_link}>Contact</a>
            </Link>
          </div>
          <div className="search_bar">
            <Input
              autoComplete="off"
              placeholder="search for items..."
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            ></Input>
          </div>
        </div>
        <div className={desktopClasses.menu_right}>
          <FavoriteBorderIcon fontSize="large" />
          <ShoppingCartIcon fontSize="large" />
        </div>
      </nav>
      <nav className={mobileClasses.mobile_main_navbar_wrapper}>
        <div className="navbar_logo">
          <Link href={menu_items.Home}>
            <a>Ovi Logo</a>
          </Link>
        </div>
        <Typography className="mobile_menu_btn" variant="h6" component="a">
          MENU <i className="fas fa-arrow-down"></i>
        </Typography>
      </nav>
    </>
  );
};

export default Navbar;
