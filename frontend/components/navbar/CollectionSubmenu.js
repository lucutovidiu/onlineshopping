import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
const menuColor = "rgba(109, 33, 79,1.0)";
const useTooltipStyles = makeStyles(theme => ({
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
    backgroundColor: menuColor,
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
      backgroundColor: menuColor,
      width: "15px",
      height: "15px",
      transform: "rotate(45deg)",
      zIndex: -1,
      top: "-6px",
      left: "15%"
    },
    "& .tooltip_main_content": {
      color: "rgba(236, 240, 241,1.0)",
      fontSize: "1.2rem",
      fontWeight: "500",
      letterSpacing: "1px",
      "& .tooltip_submenu_items": {
        listStyle: "none",
        margin: 0,
        padding: "1rem 0 0 0 ",
        "& li a": {
          color: "rgba(236, 240, 241,1.0)",
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

export default function CollectionSubmenu({ submenu, isHidden, onEvent }) {
  //onClick={onClick}
  const classes = useTooltipStyles();
  return (
    <div className={!isHidden ? classes.tooltip_main_wrapper : classes.hideMenu}
      onMouseEnter={() => onEvent("SHOW")}
      onMouseLeave={() => onEvent("HIDE")}
      onClick={() => onEvent("HIDE")}
    >
      {submenu.map(submenu => (
        <div
          key={Math.round(Math.random() * 6000)}
          className="tooltip_main_content"
        >
          {submenu.submenuTitle.en}
          <ul className="tooltip_submenu_items">
            {submenu.submenuItems.map(link => (
              <li key={Math.round(Math.random() * 6000)}>
                <Link href={link.submenuItem.link}>
                  <a>{link.submenuItem.title.en}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
