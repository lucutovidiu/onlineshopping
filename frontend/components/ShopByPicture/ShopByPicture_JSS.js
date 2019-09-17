import { makeStyles } from "@material-ui/styles";

const useShopByPictureStyles = makeStyles({
  picshop_main_wrapper: {
    textAlign: "center",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& .picshop_pic_wrapper": {
      position: "relative",
      display: "inline-block",
      marginBottom: "2rem",
      height: "70vh",
      width: "90vw",
      maxWidth: "650px",
      maxHeight: "450px",
      "&::after": {
        position: "absolute",
        content: `""`,
        left: "-3%",
        top: "3%",
        width: "106%",
        height: "100%",
        border: "3px solid grey",
        zIndex: "-5"
      }
    }
  }
});
export default useShopByPictureStyles;
