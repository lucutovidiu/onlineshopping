import { makeStyles } from "@material-ui/styles"

export const useArticleStyles = makeStyles(theme => ({
    article_main_wrapper: {
        padding: "1rem 1rem",

        "& .image_galery": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "& .article_description": {
                fontWeight: "bold",
                textAlign: "center",
                padding: "1rem",
                letterSpacing: "0.5px"
            },
            "& .return_details": {
                width: "100%",
                display: "flex",
                textAlign: "left",
                justifyContent: "space-around"
            }
        }
    },
    recomanded_articles_wrapper: {
        "& .recomanded_title": {
            // border: "1px solid green",
            textAlign: "center",
            width: "100%"
        },
        "& .recomandation_articles": {
            marginTop: "-1rem",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
        }
    }
}))