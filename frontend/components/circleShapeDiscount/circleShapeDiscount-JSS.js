import { makeStyles } from "@material-ui/styles";
import { minHeight, minWidth } from "@material-ui/system";

const useCircleShapeStyles = makeStyles(theme => ({
  circle_shape_wrapper: {
    position: "relative",
    minHeight: "270px",
    minWidth: "270px",
    display: "inline-block",
    margin: "2rem",
    border: `1px solid ${theme.palette.circleShapeDisscounts.outerBorder}`,
    boxShadow: `1px 1px 3px 0 ${theme.palette.circleShapeDisscounts.outerBorder}`,
    borderRadius: "42%",
    overflow: "hidden",
    "& .circle_shape_header": {
      position: "absolute",
      width: "100%",
      height: "100%",
      "& .circle_shape_background": {
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 1
      },
      "& .more_info_btn": {
        backgroundColor: theme.palette.circleShapeDisscounts.pictureFilterColor,
        position: "absolute",
        zIndex: 3,
        width: "100%",
        height: "100%",
        fontSize: "1rem",
        fontWeight: "bold",
        whiteSpace: "nowrap",
        color: theme.palette.circleShapeDisscounts.moreInfoColor,
        textShadow: "1px 1px black",
        textTransform: "uppercase",
        cursor: "help",
        display: "flex",
        justifyContent: "center",
        paddingTop: "2rem"
      }
    },
    "& .circle_shape_footer": {
      position: "absolute",
      zIndex: 10,
      height: "30%",
      backgroundColor:
        theme.palette.circleShapeDisscounts.shapeFooterBackground,
      bottom: 0,
      right: 0,
      left: 0,
      boxShadow: `1px -1px 5px 0 ${theme.palette.circleShapeDisscounts.shapeFooterBackgroundBoxShaddow}`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      "& .sale_text": {
        fontSize: "1rem",
        fontWeight: "bold",
        color: theme.palette.circleShapeDisscounts.priceBtnColor
      },
      "& .buy_now": {
        fontSize: "1.2rem",
        fontWeight: "bold"
      }
    }
  }
}));

export default useCircleShapeStyles;
