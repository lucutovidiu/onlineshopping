import React from "react";
import Link from "next/link";
import { MenuNavItems, MenuLoginNavItems } from "./MenuNavItems";
import { Input, Typography, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useDesktopStyles from "./Desktop_JSS_NavBar";

const DesktopNavMenu = () => {
  const desktopClasses = useDesktopStyles();
  // const { Home, Contact, SignIn, Discounts } = MenuNavItems();
  return (
    <>
      <div className={desktopClasses.login_navbar_warpper}>
        {MenuLoginNavItems().map((link, key) => (
          <Link key={key} href={link.navItemLink}>
            <a>{link.navItemName.en}</a>
          </Link>
        ))}
      </div>
      <nav className={desktopClasses.main_navbar_wrapper}>
        <div className="menu_left">
          <div className="navbar_main_menu-list">
            <div className="navbar_logo">
              <Link href="/">
                <a>Ovi Logo</a>
              </Link>
            </div>
            {MenuNavItems().map((link, key) => (
              <Link key={key} href={link.navItemLink}>
                <a className={desktopClasses.nav_link}>{link.navItemName.en}</a>
              </Link>
            ))}
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
          <LanguageIcon fontSize="large" />
          <Typography>EN</Typography>
        </div>
      </nav>
    </>
  );
};

export default DesktopNavMenu;
