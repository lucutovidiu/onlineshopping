import { makeStyles } from "@material-ui/styles";

const useCircleShapePageStyles = makeStyles(theme => ({
  offersPageTitle: {
    letterSpacing: "2px",
    fontWeight: "bold",
    fontFamily: theme.palette.fonts.LatoBlack,
    width: "80%",
    marginTop: "1rem",
    margin: "0 auto"
  },
  disscountPageWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    margin: "0 auto",
    ["@media all and (min-width:790px)"]: {
      width: "85%"
    }
  }
}));

export default useCircleShapePageStyles;
