import React from "react";
import { useCollectionSubmenuStyles } from "./CollectionSubmenu_JSS"
import Link from "next/link";
import uuidv1 from 'uuid/v1';

export default function CollectionSubmenu({ submenu, isHidden, onEvent }) {

  const classes = useCollectionSubmenuStyles();
  return (
    <div className={!isHidden ? classes.tooltip_main_wrapper : classes.hideMenu}
      onMouseEnter={() => onEvent("SHOW")}
      onMouseLeave={() => onEvent("HIDE")}
      onClick={() => onEvent("HIDE")}
    >
      {submenu.map(submenu => (
        <div
          key={uuidv1()}
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
