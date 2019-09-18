import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    },
    signInBar: {
      link: "rgb(172, 172, 172)"
    },
    navBar: {
      link: "rgb(112, 105, 105)",
      linkBorderTop: "rgb(112, 105, 105)",
      linkHover: "rgb(46, 44, 44)",
      iconsHover: "rgb(218, 214, 214)",
      navBarBorders: "rgb(218, 214, 214)"
    },
    shopByPicture: {
      borders: "rgb(112, 105, 105)",
      title: "#9b59b6",
      titleShadow: "black",
      shopNowBtnBackground: "#ecf0f1",
      shopNowBtnBorder: "gray"
    },
    signIn: {
      background: "#f6f9fa",
      boxShadow: "gray",
      link: "rgb(41, 91, 201)"
    },
    circleShapeDisscounts: {
      outerBorder: "gray",
      pictureFilterColor: "rgba(0,0,0,0.3)",
      moreInfoColor: "#9b59b6",
      shapeFooterBackground: "#EAEAEA",
      shapeFooterBackgroundBoxShaddow: "gray",
      priceBtnColor: "#3498db"
    }
  }
});

export default theme;
