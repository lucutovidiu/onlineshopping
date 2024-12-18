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
    fonts: {
      LatoBlack: "Lato Black",
      Mina: "Mina",
      HandWriting: "HandWriting"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#f5f6fa"
    },
    signInBar: {
      link: "rgb(172, 172, 172)"
    },
    navBar: {
      link: "rgb(112, 105, 105)",
      linkBorderTop: "rgb(112, 105, 105)",
      linkHover: "rgb(46, 44, 44)",
      iconsHover: "rgb(218, 214, 214)",
      navBarBorders: "rgb(218, 214, 214)",
      mobileDropdown: "#ecf0f1",
      searchInputStyles: {
        afterBorderColor: "#880e4f",
      }
    },
    shopByPicture: {
      borders: "rgb(112, 105, 105)",
      title: "#9b59b6",
      titleShadow: "black",
      shopNowBtnBackground: "#ecf0f1",
      shopNowBtnBorder: "gray",
      shopNowBtnHover: "rgb(112, 115, 126)"
    },
    signIn: {
      componentBackgroundImage: `url("../../../static/img/background/signin3.jpg") no-repeat center center fixed`,
      background: "rgba(218, 214, 214,0.8)",
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
    },
    footer: {
      backgroundColor: "#34495e",
      sectionHeader: "#9b59b6",
      linkColor: "#EAEAEA",
      linkHoverColor: "grey",
      iconColor: "#2980b9"
    },
    newlyAdded: {
      chevronIconBackgroundColor: "rgba(1,1,1,0.3)",
      sliderBorder: "#8e44ad"
    },
    carosel: {
      chevronBackgroundColor: "rgba(192, 57, 43,0.5)",
      chevronHoverColor: "rgba(192, 57, 43,0.8)",
      textShadowColor: "#8e44ad",
      imageOverlayColor: "rgba(1,1,1,0.4)"
    },
    moreArticles: {
      imageOverlayColor: "rgba(1,1,1,0.3)",
      imageFrameBorder: "rgba(142, 68, 173,0.8)"
    },
    collectionSubmenu: {
      menuBackgroundColor: "rgba(62, 10, 42, 1)",//"rgba(109, 33, 79,1.0)",
      menuItemsColor: "rgba(236, 240, 241,1.0)"
    },
    CollectionFilterMenuComponent_JSS: {
      dropdownBoxBorderColor: "black",
      filterBtnBackgroundColor: "rgb(34, 34, 34)",
      filterBtnTextColor: "#ED4C67",
    }
  }
});

export default theme;
