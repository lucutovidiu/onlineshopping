import { makeStyles } from "@material-ui/styles";

const styles = makeStyles(theme => ({
  hide: {
    display: "none"
  },
  imagesContainer: {},
  carosel_outer_wrapper: {
    padding: "1.5rem 0 0 0",
    // backgroundColor: "red",
    position: "relative",
    "& .carosel_inner_wrapper": {
      cursor: "pointer",
      position: "relative",
      height: "auto",
      width: "95%",
      maxWidth: "1260px",
      margin: "0 auto",
      "& .carosel_image": {
        width: "100%"
      },
      "& .imagesContainer": {
        position: "absolute"
      },
      "& .carosel_arrow_left,& .carosel_arrow_right": {
        position: "absolute",
        fontSize: "3rem",
        transform: "translateY(-50%)",
        color: "white",
        backgroundColor: "rgba(192, 57, 43,0.5)",
        "@media all and (max-width:576px)": {
          fontSize: "1.5rem"
        },
        "&:hover": {
          backgroundColor: "rgba(192, 57, 43,0.8)"
        }
      },
      "& .carosel_arrow_left": {
        top: "50%",
        left: "2%"
      },
      "& .carosel_arrow_right": {
        top: "50%",
        right: "2%"
      },
      "& .carosel_text_left": {
        maxWidth: "32%",
        textTransform: "uppercase",
        position: "absolute",
        textShadow: "1px 1px #2c3e50",
        // backgroundColor: "rgba(52, 73, 94,0.6)",
        fontFamily: "Moca",
        zIndex: 2,
        top: "50%",
        left: "8%",
        transform: "translateY(-50%)",
        "@media all and (max-width:767px)": {
          maxWidth: "40%",
          left: "10%"
        },
        "@media all and (max-width:576px)": {
          maxWidth: "80%",
          left: "50%",
          transform: "translate(-50%,-60%)"
        },
        "& .carosel_text_title": {
          cursor: "text",
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: "1px",
          fontSize: "2rem",
          padding: "1rem 0",
          "@media all and (max-width:767px)": {
            fontSize: "1.3rem",
            fontWeight: "normal"
          },
          "@media all and (max-width:576px)": {
            fontSize: "0.8rem"
          }
        },
        "& .see_more_btn": {
          letterSpacing: "1px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "@media all and (max-width:576px)": {
            fontSize: "0.7rem",
            "& svg": {
              fontSize: "0.8rem"
            }
          }
        }
      },
      "@media all and (max-width:767px)": {
        width: "100%"
      }
    }
  },
  nullImageDisplay: {
    position: "relative",
    height: "560px",
    width: "95%",
    maxWidth: "1260px",
    margin: "0 auto",
    color: "black",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

export default styles;
