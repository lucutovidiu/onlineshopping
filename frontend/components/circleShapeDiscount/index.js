import React from "react";
import useCircleShapeStyles from "./circleShapeDiscount-JSS";
import { Typography, Link } from "@material-ui/core";

const index = ({ disscountedItem }) => {
  const classes = useCircleShapeStyles();
  const previousValue = Math.round(
    parseFloat(disscountedItem.disscountValue) +
    parseFloat(disscountedItem.disscountValue) * 0.3
  );

  return (
    <div className={classes.circle_shape_wrapper}>
      <div className="circle_shape_header">
        <Link href={disscountedItem.link}>
          <img
            className="circle_shape_background"
            src={disscountedItem.imageSrc}
            alt="image title"
          />
          <div className="more_info_btn">More Info</div>
        </Link>
      </div>
      <div className="circle_shape_footer">
        <Typography className="sale_text" variant="h6" component="h1">
          <span style={{ textDecoration: "line-through" }}>
            Was: {previousValue}
            {disscountedItem.sellingCurrency}
          </span>{" "}
          Now Only: {disscountedItem.disscountValue}
          {disscountedItem.sellingCurrency}
        </Typography>
        <Typography className="buy_now" variant="h6" component="h1">
          Buy Now
        </Typography>
      </div>
    </div>
  );
};

export default index;
