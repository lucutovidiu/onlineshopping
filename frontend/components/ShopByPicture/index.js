import React from "react";
import useShopByPictureStyles from "./ShopByPicture_JSS";

const ShopByPicture = () => {
  const classes = useShopByPictureStyles();
  return (
    <div className={classes.picshop_main_wrapper}>
      <div
        className="picshop_pic_wrapper"
        style={{
          background: "url('../../../static/img/fashionPic/1.jpg') no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      <div
        className="picshop_pic_wrapper"
        style={{
          background: "url('../../../static/img/fashionPic/2.jpg') no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      <div
        className="picshop_pic_wrapper"
        style={{
          background: "url('../../../static/img/fashionPic/3.jpg') no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
    </div>
  );
};

export default ShopByPicture;
