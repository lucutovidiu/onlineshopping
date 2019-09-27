import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
    menu_main_wrapper: {
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        "@media all and (max-width: 599px)": {
            height: "200px",
            flexDirection: "column",
            alignItems: "flex-start"
        }
    },
    leftMenu_Wrapper: {
        display: "flex",
        // border: "1px solid red",
        alignItems: "center",
        flexWrap: "wrap",
        height: "41px",
        width: "fit-content",
        marginTop: "0.5rem",
        "& .subMenuItems": {
            position: "relative",
            display: "inline-block",
        },
        "@media all and (max-width: 599px)": {
            width: "130px"
        }
    },
    rightMenu_Wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "39px",
        width: "fit-content",
        marginTop: "0.5rem",
        width: "180px",
        // border: "1px solid red",
        "& .product_qty": {
            fontWeight: "bold",
            // border: "1px solid red",
        },
        "@media all and (max-width: 599px)": {
            // fontSize: "0.75rem",
            width: "fit-content",
            marginLeft: "0.5rem"
        }
    },
    default_custom_component: {
        position: "relative",
        "& .btnWrapper": {
            display: "flex",
            alignItems: "center",
            // justifyContent: "center",
            position: "absolute",
            position: "relative",
            padding: "0.5rem",
            backgroundColor: theme.palette.background.default,
            textAlign: "center",
            width: "90px",
            fontWeight: "bold",
            cursor: "context-menu",
        },
        "& .menu_list": {
            border: `1px solid ${theme.palette.CollectionFilterMenuComponent_JSS.dropdownBoxBorderColor}`,
            position: "absolute",
            // position: "relative",
            width: "200px",
            backgroundColor: theme.palette.background.default,
            padding: "0.8rem 0 0 1rem",
            top: "40px",
            left: "0px",
            zIndex: "10",
        },
        "& .filterBtn": {
            backgroundColor: theme.palette.CollectionFilterMenuComponent_JSS.filterBtnBackgroundColor,
            borderRadius: "0",
            margin: "0.3rem 1rem 0.5rem 0",
            letterSpacing: "1.5px",
            fontSize: "1rem",
            color: theme.palette.CollectionFilterMenuComponent_JSS.filterBtnTextColor,
        }
    },
    addBorders: {
        zIndex: "11",
        borderTop: `1px solid ${theme.palette.CollectionFilterMenuComponent_JSS.dropdownBoxBorderColor}`,
        borderLeft: `1px solid ${theme.palette.CollectionFilterMenuComponent_JSS.dropdownBoxBorderColor}`,
        borderRight: `1px solid ${theme.palette.CollectionFilterMenuComponent_JSS.dropdownBoxBorderColor}`,
    },
    "@keyframes animateRotate": {
        from: {
            transform: "rotate(0deg)"
        },
        to: {
            transform: "rotate(180deg)"
        }
    },
    rotateExpandBtnUp: {
        animation: "$animateRotate 0.5s forwards"
    },
    hideComponent: {
        display: "none"
    }
}))