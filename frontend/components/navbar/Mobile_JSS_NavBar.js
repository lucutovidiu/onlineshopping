import { makeStyles } from "@material-ui/styles";

const useMobileStyles = makeStyles(theme => ({
  mobile_main_navbar_wrapper: {
    position: "sticky",
    zIndex: 100,
    top: 0 /* required */,
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-around",
    padding: "0.5rem 0rem",
    backgroundColor: theme.palette.background.default,
    borderTop: `1px solid ${theme.palette.navBar.navBarBorders}`,
    borderBottom: `1px solid ${theme.palette.navBar.navBarBorders}`,
    ["@media all and (min-width: 905px)"]: {
      display: "none"
    },
    "& .navbar_logo": {
      // border: "1px solid green",
      position: "relative",
      fontFamily: "HandWriting",
      fontSize: "2rem",
      fontWeight: "normal",
      padding: "0 0.5rem",
      width: "65px",
      height: "45px",
      marginRight: "1rem",
      // display: "flex",

      "& a": {
        textDecoration: "none",
        color: "black",
        position: "relative",
        "& img": {
          position: "relative",
          paddingTop: "0.3rem",
          width: "100%",
          height: "100%",
          objectFit: "100%"
          // objectPosition: "center"
        }
      }
    },
    "& .mobile_menu_btn": {
      // border: "1px solid green",
      fontSize: "1rem",
      color: theme.palette.navBar.link,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      width: "85px",
      borderLeft: "1px dashed pink",
      borderRight: "1px dashed pink",
      cursor: "pointer"
    },
    "& .dropDownMenu": {
      position: "absolute",
      backgroundColor: theme.palette.background.default,
      width: "100%",
      height: "0",
      top: "100%",
      borderBottom: `1px solid ${theme.palette.navBar.navBarBorders}`,
      textTransform: "uppercase",
      overflowY: "hidden",
      "& .dropDownMenu_containter": {
        padding: "0.5rem 0",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& a": {
          padding: "0.2rem 0",
        },
        "& a,& a:active,& .navItem": {
          color: theme.palette.navBar.link,
          textDecoration: "none",
          fontSize: "1rem"
        }
      },
      "& .collection_submenu": {
        "& .collection_submenu_cathegoryItems": {
          marginLeft: "10px",
          "& h4": {
            margin: "5px 0"
          },
          "& ul": {
            margin: "0",
            paddingLeft: "5px",
            "& li": {
              listStyle: "none",
              "& a": {
                fontSize: "0.9rem",
              }
            }
          }
        },
      }
    },
    "& .shopping_cart_menu": {
      // border: "1px solid green",
      position: "relative",
      // right: "0",
      // float: "left",
      display: "flex",
      alignItems: "center",
      alignSelf: "center",

      "& > *": {
        paddingLeft: "0.6rem"
        // paddingBottom: "0.5rem"
      },
      "& :last-child": {
        // backgroundColor: "red",
        paddingTop: "0.2rem"
      }
    }
  },
  "@keyframes animateDropDown": {
    "0%": {
      height: 0
    },
    "20%": {
      height: "40%"
    },
    "40%": {
      height: "70%"
    },
    "60%": {
      height: "100%"
    },
    "80%": {
      height: "120%"
    },
    "100%": {
      height: "auto",
      borderBottom: `3px solid ${theme.palette.navBar.navBarBorders}`
    }
  },
  showMobileNav: {
    animation: "$animateDropDown 0.2s ease-out forwards"
  },
  navItem_links: {
    marginLeft: "-4.2rem"
  },
}));

export default useMobileStyles;
