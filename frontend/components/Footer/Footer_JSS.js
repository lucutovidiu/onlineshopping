import { makeStyles } from "@material-ui/styles";

const styles = makeStyles(theme => {
  // console.log(theme);
  return {
    footerOuterWrapper: {
      backgroundColor: theme.palette.footer.backgroundColor,
      height: "auto",
      padding: "2rem 0 3rem 1rem",
      // fontFamily: "Poppins, sans-serif",
      "& .section_header": {
        color: theme.palette.footer.sectionHeader,
        fontWeight: "bold"
      },
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
            color: theme.palette.footer.linkColor,
            textDecoration: "none",
            letterSpacing: "1px"
          },
          "& a:hover": {
            color: theme.palette.footer.linkHoverColor
          }
        }
      }
    },
    FollowUs: {
      // backgroundColor: "red"
      width: "fit-content",
      cursor: "pointer",
      paddingLeft: "1.2rem",
      fontSize: "1rem",
      color: theme.palette.footer.linkColor,
      "& a,& a:active": {
        textDecoration: "none",
        letterSpacing: "1px"
      },
      "& a:hover .MuiSvgIcon-root": {
        color: theme.palette.footer.linkHoverColor
      },
      "& a:hover": {
        color: theme.palette.footer.linkHoverColor
      },
      "& .MuiSvgIcon-root": {
        marginLeft: "0.9rem",
        color: theme.palette.footer.iconColor
      }
    },
    keepInTouch: {
      display: "flex",
      alignItems: "center",
      padding: "0.5rem 1rem",
      "@media all and (max-width:571px)": {
        // paddingLeft: "0.35rem"
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0 1rem"
      },
      "& input": {
        width: "160px",
        color: theme.palette.footer.linkColor,
        "@media all and (max-width:571px)": {
          width: "140px"
        }
      },
      "& .subscribeToNewsletter": {
        marginLeft: "0.5rem",
        color: theme.palette.footer.linkColor,
        fontFamily: "inherit",
        letterSpacing: "1px",
        "& .MuiButton-label": {
          margin: 0
        },
        "@media all and (max-width:571px)": {
          marginTop: "1rem",
          marginLeft: "-0.1rem"
        }
      }
    }
  };
});

export default styles;
