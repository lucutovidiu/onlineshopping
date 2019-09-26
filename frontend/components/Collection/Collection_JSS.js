import { makeStyles } from "@material-ui/core"

export const collectionStyles = makeStyles(theme => ({
    bodyWrapper: {
        paddingTop: "1rem",
        paddingBottom: "1rem",
        "& .collection_loading_spinner": {
            textAlign: "center"
        },
        "& .collection_title": {
            fontWeight: "500",
            textTransform: "uppercase",
            fontSize: "0.9rem"
            // letterSpacing: "1px"
        }
    }
}));