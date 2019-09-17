import { makeStyles } from "@material-ui/styles";

let login_navbar_color = "rgb(172, 172, 172)";
let login_navbar_border = "rgb(218, 214, 214)";
let navbar_link_color = "rgb(46, 44, 44)";

const useMobileStyles = makeStyles({
  mobile_main_navbar_wrapper: {
    position: "sticky",
    zIndex: "15",
    top: 0 /* required */,
    display: "flex",
    justifyContent: "center",
    padding: "0.8rem 1rem",
    backgroundColor: "#fff",
    borderTop: `1px solid ${login_navbar_border}`,
    borderBottom: `1px solid ${login_navbar_border}`,
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
      color: "rgb(112, 105, 105)"
    }
  }
});

export default useMobileStyles;
