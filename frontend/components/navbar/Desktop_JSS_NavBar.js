import { makeStyles } from "@material-ui/styles";
import { Tooltip } from "@material-ui/core";

const useDesktopStyles = makeStyles(theme => ({
  login_navbar_warpper: {
    padding: "0.5rem",
    fontSize: "0.7rem",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "flex-end",
    "& a": {
      textDecoration: "none",
      color: theme.palette.signInBar.link,
      borderRight: `1px solid ${theme.palette.signInBar.link}`,
      padding: "0 0.5rem",
      "&:last-child": {
        borderRight: "none"
      },
      "&:hover,&:active": {
        color: theme.palette.signInBar.linkHover
      }
    }
  },
  main_navbar_wrapper: {
    position: "sticky",
    zIndex: 100,
    top: 0 /* required */,
    display: "flex",
    padding: "0.5rem 1rem",
    backgroundColor: theme.palette.background.default,
    borderTop: `1px solid ${theme.palette.navBar.navBarBorders}`,
    borderBottom: `1px solid ${theme.palette.navBar.navBarBorders}`,
    ["@media all and (max-width: 905px)"]: {
      display: "none"
    },
    "& .menu_left": {
      display: "flex",
      flexBasis: "88%",
      borderRight: `1px solid ${theme.palette.navBar.navBarBorders}`,
      "& .navbar_main_menu-list": {
        flex: 2,
        display: "flex",
        alignItems: "center",
        "& .navbar_logo": {
          fontFamily: "HandWriting",
          fontSize: "2rem",
          fontWeight: "normal",
          padding: "0 2rem",
          "& a": {
            textDecoration: "none",
            color: "black",
            "& img": {
              position: "relative",
              width: "70px",
              height: "50px",
              top: "4px"
            }
          }
        }
      },
      "& .search_bar": {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        padding: "0 2rem",
        alignItems: "center",
        "& input": {
          padding: "0.7rem 0"
        }
      }
    }
  },
  nav_link: {
    // border: "1px solid pink",
    textDecoration: "none",
    padding: "0 1rem",
    color: theme.palette.navBar.linkHover,
    fontSize: "1rem",
    fontFamily: "Lato Black",
    position: "relative",
    color: theme.palette.navBar.link,
    "&:hover, &:active": {
      color: theme.palette.navBar.linkHover
    },
    "&::after": {
      content: `""`,
      position: "absolute",
      borderTop: `3px solid ${theme.palette.navBar.linkBorderTop}`,
      width: "0%",
      top: "-22px",
      left: "10%",
      transition: "width 0.5s ease"
    },
    "&:hover::after": {
      width: "80%"
      //   animation: nav_top_bar 1s,
    }
  },
  "@keyframes arrowDownAnimation": {
    from: {
      paddingTop: "0"
    },
    to: {
      paddingTop: "20px",
      visibility: "hidden"
    }
  },
  navbar_collection_menu: {
    // border: "1px solid pink",
    position: "relative",
    // overflow: "hidden",
    "& .navbar_collection_menu_btn": {
      display: "flex",
      alignItems: "center",
      cursor: "context-menu",
      textDecoration: "none",
      // padding: "0 1rem",
      color: theme.palette.navBar.linkHover,
      fontSize: "1rem",
      fontFamily: "Lato Black",
      position: "relative",
      color: theme.palette.navBar.link,
      margin: "0",
      paddingRight: "0",
      "&:hover, &:active": {
        color: theme.palette.navBar.linkHover
      },
      "&:hover .expand_down": {
        color: theme.palette.navBar.linkHover,
        position: "relative",
        // marginRight: "0.5rem"
        paddingTop: "20px",
        animation: "$arrowDownAnimation 0.8s ease-out forwards"
      }
    }
  },
  menu_right: {
    display: "flex",
    justifyContent: "space-around",
    width: "160px",
    alignItems: "center",
    "& svg": {
      "&:hover": {
        color: theme.palette.navBar.iconsHover,
        cursor: "pointer"
      }
    },
    "& p": {
      fontWeight: "bold"
    }
  }
}));

export default useDesktopStyles;
