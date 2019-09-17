import { makeStyles } from "@material-ui/styles";

const useCircleShapePageStyles = makeStyles(theme => ({
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
