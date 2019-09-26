import React from 'react'
import { DesktopFilterMenuItems } from "../CollectionMenuItems/FilterMenuItems"
import SizeComponent from "./MenuItemsComponents/SizeComponent"
import PriceComponent from "./MenuItemsComponents/PriceComponent"
import ColorComponent from "./MenuItemsComponents/ColorComponent"
import SortByComponent from "./MenuItemsComponents/SortByComponent"
import useCollectionFilterMenuStyles from "./CollectionFilterMenuComponent_JSS"
import uuidv1 from 'uuid/v1';

const CollectionFilterMenu = () => {
    const [{ leftMenu }, { rightMenu }] = DesktopFilterMenuItems;
    const [menuIsOpen, setMenuIsOpen] = React.useState(
        { SizeComponent: false, PriceComponent: false, ColorComponent: false, SortByComponent: false }
    );

    function openComponentMenu(compoment) {
        switch (compoment) {
            case "SizeComponent":
                return setMenuIsOpen({ SizeComponent: !menuIsOpen.SizeComponent, PriceComponent: false, ColorComponent: false, SortByComponent: false })
            case "PriceComponent":
                return setMenuIsOpen({ SizeComponent: false, PriceComponent: !menuIsOpen.PriceComponent, ColorComponent: false, SortByComponent: false })
            case "ColorComponent":
                return setMenuIsOpen({ SizeComponent: false, PriceComponent: false, ColorComponent: !menuIsOpen.ColorComponent, SortByComponent: false })
            case "SortByComponent":
                return setMenuIsOpen({ SizeComponent: false, PriceComponent: false, ColorComponent: false, SortByComponent: !menuIsOpen.SortByComponent })
            case "ClearAll":
                return setMenuIsOpen({ SizeComponent: false, PriceComponent: false, ColorComponent: false, SortByComponent: false })
        }
    }

    const classes = useCollectionFilterMenuStyles();
    function renderMenuItem({ itemName, itemValues }) {
        switch (itemName.title) {
            case "SIZE": {
                return (
                    <SizeComponent menuIsOpen={menuIsOpen.SizeComponent} openComponentMenu={openComponentMenu} classes={classes} componentName={itemName} componentValues={itemValues} key={uuidv1()} />
                )
            }
            case "PRICE": {
                return (
                    <PriceComponent menuIsOpen={menuIsOpen.PriceComponent} openComponentMenu={openComponentMenu} classes={classes} componentName={itemName} componentValues={itemValues} key={uuidv1()} />
                )
            }
            case "COLOR": {
                // console.log("sd")
                return (
                    <ColorComponent menuIsOpen={menuIsOpen.ColorComponent} openComponentMenu={openComponentMenu} classes={classes} componentName={itemName} componentValues={itemValues} key={uuidv1()} />
                )
            }
            case "SORTBY": {
                return (
                    <SortByComponent menuIsOpen={menuIsOpen.SortByComponent} openComponentMenu={openComponentMenu} classes={classes} componentName={itemName} componentValues={itemValues} key={uuidv1()} />
                )
            }
            case "PRODUCTQUANTITY": {
                return (
                    <div className="product_qty" key={uuidv1()}>{itemName.en} 8</div>
                )
            }
            default: {
                return (
                    <span key={itemName.title}>default</span>
                )
            }
        }
    }

    return (
        <div className={classes.menu_main_wrapper}>
            <div className={classes.leftMenu_Wrapper}>
                {leftMenu.map((item, key) => {
                    return renderMenuItem(item)
                })}
            </div>
            <div className={classes.rightMenu_Wrapper}>
                {rightMenu.map((item, key) => {
                    return renderMenuItem(item)
                })}
            </div>
        </div>
    )
}

export default CollectionFilterMenu
