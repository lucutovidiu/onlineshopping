import React from "react";
import useShopByPictureStyles from "./ShopByPicture_JSS";
import { Typography, Link } from "@material-ui/core";

const ShopByPicture = ({ pictureData }) => {
  const classes = useShopByPictureStyles();
  return (
    <div className={classes.picshop_main_wrapper}>
      <Link href={pictureData.link}>
        <div className="picshop_pic_wrapper">
          <img
            className="picshop_picture"
            src={pictureData.backgroundImage}
            alt="Page title"
          />
          <Typography
            className="picshop_product_title"
            variant="h1"
            component="h2"
          >
            {pictureData.description.title.en}{" "}
            {pictureData.description.cathegory.en}
          </Typography>

          <Typography
            className="picshop_shop_now"
            variant="h1"
            component="h2"
            noWrap
          >
            {pictureData.btnName.en}
          </Typography>
        </div>
        >
      </Link>
    </div>

  );
};

export default ShopByPicture;
