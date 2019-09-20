import { makeStyles } from "@material-ui/styles";

const useShopByPictureStyles = makeStyles(theme => ({
  picshop_main_wrapper: {
    textAlign: "center",
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "2rem",
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
        border: `3px solid ${theme.palette.shopByPicture.borders}`,
        zIndex: "-5"
      },
      "& .picshop_product_title": {
        position: "absolute",
        textTransform: "uppercase",
        top: "0.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        color: theme.palette.shopByPicture.title,
        textShadow: `3px 2px 1px ${theme.palette.shopByPicture.titleShadow}`,
        letterSpacing: "3px",
        fontWeight: "bold",
        fontSize: "3rem",
        width: "100%",
        ["@media all and (max-width: 520px)"]: {
          fontSize: "1.8rem"
        }
      },
      "& .picshop_picture": {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      "& .picshop_shop_now": {
        fontSize: "2rem",
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translate(-50%,-50%)",
        fontWeight: "bold",
        backgroundColor: theme.palette.shopByPicture.shopNowBtnBackground,
        padding: "1.2rem",
        border: `2px solid ${theme.palette.shopByPicture.shopNowBtnBorder}`,
        letterSpacing: "2px",
        cursor: "pointer",
        ["@media all and (max-width: 520px)"]: {
          fontSize: "1.5rem",
          padding: "0.8rem 0.5rem"
        }
      }
    }
  }
}));
export default useShopByPictureStyles;
