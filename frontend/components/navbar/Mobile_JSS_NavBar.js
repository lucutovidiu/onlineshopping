import { makeStyles } from "@material-ui/styles";

const useMobileStyles = makeStyles(theme => ({
  mobile_main_navbar_wrapper: {
    position: "sticky",
    zIndex: "15",
    top: 0 /* required */,
    display: "flex",
    justifyContent: "center",
    padding: "0.8rem 1rem",
    backgroundColor: theme.palette.background.default,
    borderTop: `1px solid ${theme.palette.navBar.navBarBorders}`,
    borderBottom: `1px solid ${theme.palette.navBar.navBarBorders}`,
    ["@media all and (min-width: 905px)"]: {
      display: "none"
    },
    "& .navbar_logo": {
      position: "absolute",
      fontFamily: "HandWriting",
      fontSize: "2rem",
      fontWeight: "normal",
      padding: "0 2rem",
      left: 0,
      top: 0,
      "& a": {
        textDecoration: "none",
        color: "black"
      }
    },
    "& .mobile_menu_btn": {
      fontSize: "1rem",
      color: theme.palette.navBar.link,
      display: "flex",
      alignItems: "center",
      width: "85px",
      justifyContent: "space-around",
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
          padding: "0.2rem 0"
        },
        "& a,& a:active": {
          color: theme.palette.navBar.link,
          textDecoration: "none"
        }
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
  }
}));

export default useMobileStyles;
