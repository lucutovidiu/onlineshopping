import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  moreArticlesWrapper: {
    maxWidth: "300px",
    minHeight: "400px",
    position: "relative",
    margin: "1.5rem 0 1.5rem",
    // backgroundColor: "rgba(44, 62, 80,0.6)",
    "& .image_wrapper": {
      position: "relative",
      borderRadius: "5px",
      overflow: "hidden",
      // border: `3px dashed ${theme.palette.moreArticles.imageFrameBorder}`,
      padding: "0",
      margin: "0",
      height: "400px",
      "& img": {
        width: "100%",
        height: "100%"
      },
      "& .more_info": {
        position: "absolute",
        top: "0",
        height: "100%",
        width: "100%",
        backgroundColor: theme.palette.moreArticles.imageOverlayColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: theme.palette.fonts.Mina,
        color: "#ecf0f1",
        textShadow: "1px 1px rgba(1,1,1,1)",
        fontSize: "1.5rem",
        cursor: "help"
      }
    },
    "& .article_title": {
      textAlign: "center",
      fontFamily: theme.palette.fonts.Mina,
      fontSize: "1.3rem",
      padding: "0.3rem 0"
    }
  },
  hideMoreInfo: {
    visibility: "hidden"
  },
  displayMoreInfo: {
    visibility: "visible"
  }
}));
