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
import uuidv1 from 'uuid/v1';

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
            <a>
              <img src="../../../static/img/logo/logoV.png" alt="logo" />
            </a>
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
              if (key === 1) {
                return (
                  <div className="collection_submenu" key={uuidv1()}>
                    <span className="navItem">{link.navItemName.en}</span>
                    {
                      link.submenu.map(submenu => {
                        return (
                          <div className="collection_submenu_cathegoryItems" key={uuidv1()}>
                            <h4>{submenu.submenuTitle.en}</h4>
                            <ul>
                              {
                                submenu.submenuItems.map(item => {
                                  return <li key={uuidv1()}>
                                    <Link href={item.submenuItem.link}>
                                      <a>{item.submenuItem.title.en}</a>
                                    </Link>
                                  </li>
                                })
                              }
                            </ul>
                          </div>
                        )
                      })
                    }
                  </div>
                );
              } else {
                return (
                  <div key={uuidv1()} className={mobileClasses.navItem_links} >
                    <Link href={link.navItemLink}>
                      <a>{link.navItemName.en}</a>
                    </Link>
                  </div>
                );
              }
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
