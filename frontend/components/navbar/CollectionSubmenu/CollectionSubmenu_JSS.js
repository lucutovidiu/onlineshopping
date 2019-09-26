import { makeStyles } from "@material-ui/core/styles";

export const useCollectionSubmenuStyles = makeStyles(theme => ({
    "@keyframes animateMenu": {
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    },
    tooltip_main_wrapper: {
        position: "absolute",
        top: "calc(100% + 28px)",
        left: "-55%",
        backgroundColor: theme.palette.collectionSubmenu.menuBackgroundColor,
        zIndex: 5,
        width: "520px",
        height: "370px",
        padding: "1.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        animation: "$animateMenu 0.5s both",
        "&:after": {
            content: "''",
            position: "absolute",
            backgroundColor: theme.palette.collectionSubmenu.menuBackgroundColor,
            width: "15px",
            height: "15px",
            transform: "rotate(45deg)",
            zIndex: -1,
            top: "-6px",
            left: "15%"
        },
        "& .tooltip_main_content": {
            color: theme.palette.collectionSubmenu.menuItemsColor,
            fontSize: "1.2rem",
            fontWeight: "500",
            letterSpacing: "1px",
            "& .tooltip_submenu_items": {
                listStyle: "none",
                margin: 0,
                padding: "1rem 0 0 0 ",
                "& li a": {
                    color: theme.palette.collectionSubmenu.menuItemsColor,
                    fontWeight: "normal",
                    textDecoration: "none",
                    letterSpacing: "0px",
                    fontSize: "1rem",
                },
                "& li": {
                    padding: 0,
                    transition: "padding 0.4s ease-in-out"
                },
                "& li:hover": {
                    paddingLeft: "0.39rem",
                    // animation: "$animatePadding 0.4s ease"
                }
            }
        }
    },
    hideMenu: {
        display: "none"
    }
}));