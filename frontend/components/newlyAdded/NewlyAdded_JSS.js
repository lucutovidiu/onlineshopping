import { makeStyles } from "@material-ui/core";

const styles = makeStyles(theme => ({
  main_wrapper: {
    // backgroundColor: "red
    position: "relative",
    boxSizing: "border-box",
    width: "100%",
    padding: "0.5rem 0",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    // maxHeight: "550px",
    // border: "1px solid pink",
    "& .carosel_head_title": {
      padding: "0.6rem 3.4%",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontSize: "1rem",
      letterSpacing: "2px"
    },
    "& .slider_controls": {
      position: "absolute",
      width: "93.6%",
      height: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      pointerEvents: "none",
      "& .ChevronLeftIcon,& .ChevronRightIcon": {
        pointerEvents: "auto",
        position: "absolute",
        width: "50px",
        height: "100px",
        backgroundColor: theme.palette.newlyAdded.chevronIconBackgroundColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: "50%",
        transform: "translateY(-52%)",
        cursor: "pointer",
        "& svg": {
          fontSize: "3rem"
        }
      },
      "& .ChevronLeftIcon": {
        left: "1px"
      },
      "& .ChevronRightIcon": {
        right: "1px"
      }
    },
    "& .slider_wrapper": {
      position: "relative",
      width: "93.6%",
      border: `2px dashed ${theme.palette.newlyAdded.sliderBorder}`,
      margin: "0 auto",
      display: "flex",
      flexWrap: "no-wrap",
      overflowX: "hidden",
      scrollBehavior: "smooth",
      justifyContent: "space-between",
      padding: "0.5rem 0.2rem",
      "& .image_wrapper": {
        display: "flex",
        flexDirection: "column",
        fontSize: "1rem",
        fontWeight: "bold",
        letterSpacing: "2px",
        "& .image_container": {
          position: "relative",
          minWidth: "300px",
          // "& .image_overlay": {
          //   position: "absolute",
          //   backgroundColor: "black",
          //   width: "100%",
          //   height: "100%",
          //   top: "0",
          //   display: "none"
          // },
          "& img": {
            cursor: "help",
            padding: "0.4rem 1.2rem 0.4rem 0",
            width: "100%",
            "&:hover": {
              opacity: "0.7"
            }
          }
        }
      }
    }
  }
}));
export default styles;
