import React from "react";
import Link from "next/link";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Link from "../../material-ui/Link";
import { MenuNavItems, MenuLoginNavItems } from "./MenuNavItems";
import { Input, Typography, InputAdornment, Icon } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useDesktopStyles from "./Desktop_JSS_NavBar";
import CollectionSubmenu from "./CollectionSubmenu/CollectionSubmenu";

const DesktopNavMenu = () => {
  const desktopClasses = useDesktopStyles();
  const [collectionMenuonFocus, setCollectionMenuonFocus] = React.useState(true);

  function collectionMenu(type) {
    switch (type) {
      case "SHOW": {
        // console.log("shown")
        setCollectionMenuonFocus(false);
        break;
      }
      case "HIDE": {
        // console.log("hide")
        setCollectionMenuonFocus(true);
        break;
      }
      default: {
        // console.log("default")
        setCollectionMenuonFocus(false);
        break;
      }
    }
  }


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
                <a>
                  <img src="../../../static/img/logo/logoV.png" alt="logo" />
                </a>
              </Link>
            </div>
            {MenuNavItems().map((link, key) => {
              // check if we are in the collection menu
              if (key === 1) {
                return (
                  <div
                    key={key}
                    className={desktopClasses.navbar_collection_menu}
                    onMouseEnter={() => collectionMenu("SHOW")}
                  >
                    <div
                      className="navbar_collection_menu_btn"
                      href={link.navItemLink}
                    >
                      <span>{link.navItemName.en}</span>
                      {/* <a>{link.navItemName.en}</a> */}
                      <Icon className="expand_down">
                        <ExpandMoreIcon />
                      </Icon>
                    </div>
                    <CollectionSubmenu onEvent={collectionMenu} isHidden={collectionMenuonFocus} submenu={link.submenu} />
                  </div>
                );
              } else
                return (
                  <Link
                    key={key + Math.round(Math.random() * 6000)}
                    href={link.navItemLink}
                  >
                    <a className={desktopClasses.nav_link}>
                      {link.navItemName.en}
                    </a>
                  </Link>
                );
            })}
          </div>

          <div className="search_bar">
            <Input
              autoComplete="off"
              placeholder="search for items..."
              className={desktopClasses.inputStyles}
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
