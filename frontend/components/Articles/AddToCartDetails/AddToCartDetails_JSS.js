import { makeStyles } from "@material-ui/styles"

export const useAddToCartDetailsStyles = makeStyles(theme => ({
    addToCart_wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        // border: "1px solid black",
        width: "40%",
        "@media all and (max-width: 959px)": {
            width: "67%"
        },
        "@media all and (max-width: 400px)": {
            width: "90%"
        },
        height: "auto",
        "& .articleSubTitle": {
            fontWeight: "bold",
            fontSize: "0.9rem",
            textTransform: "uppercase",
            letterSpacing: "0.6px",
            color: "rgba(80,40,40,1)"
        },
        "& .addToCartBtn": {
            backgroundColor: "rgba(0, 0, 0, 1)",
            color: "rgba(255,255,255,1)"
        }
    }
}))