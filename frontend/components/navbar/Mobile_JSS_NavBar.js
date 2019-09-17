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
    marginBottom: "1rem",
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
      color: theme.palette.navBar.link
    }
  }
}));

export default useMobileStyles;
