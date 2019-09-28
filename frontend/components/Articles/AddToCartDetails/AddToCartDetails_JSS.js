import { makeStyles } from "@material-ui/styles"

export const useAddToCartDetailsStyles = makeStyles(theme => ({
    addToCart_wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        // border: "1px solid black",
        width: "60%",
        height: "60%",
        "& .articleSubTitle": {
            fontWeight: "bold",
            fontSize: "0.9rem",
            textTransform: "uppercase",
            letterSpacing: "0.6px",
        }
    }
}))