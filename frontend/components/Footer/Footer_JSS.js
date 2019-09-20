import { makeStyles } from "@material-ui/styles";

const styles = makeStyles(theme => ({
  footerOuterWrapper: {
    backgroundColor: "#bdc3c7",
    height: "auto",
    padding: "2rem 0 3rem 1rem",
    "& .footerInnerWrapper": {
      width: "90%",
      margin: "0 auto",
      "& .my_eshopping_links": {
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        paddingLeft: "1rem",
        fontSize: "1rem",
        "& a,& a:active": {
          color: "black",
          textDecoration: "none",
          letterSpacing: "1px"
        },
        "& a:hover": {
          color: "grey"
        }
      }
    }
  },
  FollowUs: {
    // backgroundColor: "red"
    width: "fit-content",
    cursor: "pointer",
    paddingLeft: "1.2rem",
    fontSize: "0.9rem",
    color: "black",
    "& a,& a:active": {
      textDecoration: "none",
      letterSpacing: "1px"
    },
    "& a:hover .MuiSvgIcon-root": {
      color: "grey"
    },
    "& a:hover": {
      color: "grey"
    },
    "& .MuiSvgIcon-root": {
      marginLeft: "0.9rem",
      color: "#34495e"
    }
  },
  keepInTouch: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 1rem",
    "@media all and (max-width:571px)": {
      paddingLeft: "0.35rem"
    },
    "& input": {
      width: "160px"
    },
    "& .subscribeToNewsletter": {
      marginLeft: "0.5rem",
      "& .MuiButton-label": {
        margin: 0
      }
    }
  }
}));

export default styles;
