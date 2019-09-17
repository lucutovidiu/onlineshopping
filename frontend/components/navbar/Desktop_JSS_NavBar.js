import { makeStyles } from "@material-ui/styles";

let login_navbar_color = "rgb(172, 172, 172)";
let login_navbar_border = "rgb(218, 214, 214)";
let navbar_link_color = "rgb(46, 44, 44)";

const useDesktopStyles = makeStyles({
  login_navbar_warpper: {
    padding: "0.5rem",
    fontSize: "0.7rem",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "flex-end",
    "& a": {
      textDecoration: "none",
      color: login_navbar_color,
      borderRight: `1px solid ${login_navbar_color}`,
      padding: " 0 0.5rem",
      "&:last-child": {
        borderRight: "none"
      },
      "&:hover,&:active": {
        color: navbar_link_color
      }
    }
  },
  main_navbar_wrapper: {
    position: "sticky",
    zIndex: 3,
    top: 0 /* required */,
    display: "flex",
    padding: "0.5rem 1rem",
    marginBottom: "1rem",
    backgroundColor: "#fff",
    borderTop: `1px solid ${login_navbar_border}`,
    borderBottom: `1px solid ${login_navbar_border}`,
    ["@media all and (max-width: 905px)"]: {
      display: "none"
    },
    "& .menu_left": {
      display: "flex",
      flexBasis: "88%",
      borderRight: `1px solid ${login_navbar_border}`,
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
            color: "black"
          }
        }
      },
      "& .search_bar": {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        padding: "0 2rem",
        alignItems: "flex-start",
        "& input": {
          padding: "0.7rem 0"
        }
      }
    }
  },
  nav_link: {
    textDecoration: "none",
    padding: "0 1rem",
    color: navbar_link_color,
    fontSize: "1rem",
    fontFamily: "Lato Black",
    position: "relative",
    color: "rgb(112, 105, 105)",
    "&:hover, &:active": {
      color: navbar_link_color
    },
    "&::after": {
      content: `""`,
      position: "absolute",
      borderTop: "3px solid rgb(112, 105, 105)",
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
  menu_right: {
    display: "flex",
    justifyContent: "space-around",
    width: "100px",
    alignItems: "center",
    "& svg": {
      "&:hover": {
        color: login_navbar_color,
        cursor: "pointer"
      }
    }
  }
});

export default useDesktopStyles;
