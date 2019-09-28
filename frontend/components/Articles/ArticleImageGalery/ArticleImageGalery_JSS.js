import { makeStyles } from "@material-ui/styles"
const pictureWrapperHeight = 85; // in vh
const bottomTextHeight = 30; // in px
export const useArticleImageGaleryStyles = makeStyles(theme => ({
    articleImageGalery_wrapper: {
        position: "relative",
        // margin: "0.1rem 3rem",
        // border: "1px solid black",
        // width: "70%",
        maxWidth: "550px",
        height: "" + pictureWrapperHeight + "vh",
        display: "flex",
        "& .side_picture_panel": {
            position: "relative",
            // border: "1px solid black",
            width: "15%",
            height: `calc(${pictureWrapperHeight}vh - ${bottomTextHeight}px)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& img": {
                width: "65%",
                padding: "0.3rem 0",
                cursor: "pointer",
                "&:hover": {
                    opacity: "0.6",
                }
            }
        },
        "& .picture_display_panel": {
            position: "relative",
            // border: "1px solid black",
            width: "85%",
            height: "100%",
            "& .picture_image": {
                "& img": {
                    objectFit: "cover",
                    objectPosition: "top center",
                    width: "100%",
                    height: `calc(${pictureWrapperHeight}vh - ${bottomTextHeight}px)`,
                }
            },
            "& .prev_picture_chevroux,& .next_picture_chevroux": {
                position: "absolute",
                // border: "1px solid black",
                height: "80px",
                width: "40px",
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "height 0.1s,width 0.1s",
                backgroundColor: "white",
                opacity: "0.8",
                "&:hover": {
                    height: "100px",
                    width: "50px",
                },
            },
            "& .prev_picture_chevroux": {

            },
            "& .next_picture_chevroux": {
                right: 0
            },
            "& .picture_number": {
                // border: "1px solid black",
                position: "absolute",
                width: "100%",
                bottom: 0,
                height: `${bottomTextHeight}px`,
                lineHeight: `${bottomTextHeight}px`,
                textAlign: "center",
                backgroundColor: theme.palette.background.default
            }
        }
    },
    showBottomBorder: {
        borderBottom: "2px solid black",
        width: "100%"
    }
}))