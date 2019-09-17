import { makeStyles } from "@material-ui/styles";
import { minHeight, minWidth } from "@material-ui/system";

const useCircleShapeStyles = makeStyles(theme => ({
  circle_shape_wrapper: {
    position: "relative",
    minHeight: "270px",
    minWidth: "270px",
    display: "inline-block",
    backgroundColor: "red",
    margin: "2rem",
    border: "1px solid gray",
    boxShadow: "1px 1px 3px 0 gray",
    borderRadius: "42%",
    overflow: "hidden",
    "& .circle_shape_background": {
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 1
    },
    "& .circle_shape_footer": {
      position: "absolute",
      zIndex: 2,
      height: "30%",
      backgroundColor: "#EAEAEA",
      bottom: 0,
      right: 0,
      left: 0,
      boxShadow: "1px -1px 5px 0 gray",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      "& .sale_text": {
        fontSize: "1rem",
        fontWeight: "bold",
        color: "#3498db"
      },
      "& .buy_now": {
        fontSize: "1.2rem",
        fontWeight: "bold"
      }
    }
  }
}));

export default useCircleShapeStyles;
