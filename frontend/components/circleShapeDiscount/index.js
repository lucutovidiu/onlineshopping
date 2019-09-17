import React from "react";
import useCircleShapeStyles from "./circleShapeDiscount-JSS";
import { Typography } from "@material-ui/core";

const index = ({ disscountedItem }) => {
  const classes = useCircleShapeStyles();
  return (
    <div className={classes.circle_shape_wrapper}>
      <img
        className="circle_shape_background"
        src={disscountedItem.imageSrc}
        alt="image title"
      />
      <div className="circle_shape_footer">
        <Typography className="sale_text" variant="h6" component="h1">
          {disscountedItem.disscountValue} sale
        </Typography>
        <Typography className="buy_now" variant="h6" component="h1">
          Buy Now
        </Typography>
      </div>
    </div>
  );
};

export default index;
