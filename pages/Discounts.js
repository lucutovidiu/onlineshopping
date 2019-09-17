import React from "react";
import Navbar from "../frontend/components/navbar/navbar";
import CircleShapeDiscount from "../frontend/components/circleShapeDiscount";
import useCircleShapePageStyles from "../frontend/components/circleShapeDiscount/circleShapeDiscountPage-JSS";

const disscountsArray = [
  {
    disscountValue: "40%",
    imageSrc: "../../../static/img/disscounts/1.jpg"
  },
  {
    disscountValue: "30%",
    imageSrc: "../../../static/img/disscounts/2.jpg"
  },
  {
    disscountValue: "10%",
    imageSrc: "../../../static/img/disscounts/3.jpg"
  }
];

const Discounts = () => {
  const classes = useCircleShapePageStyles();
  return (
    <>
      <Navbar></Navbar>
      <div className={classes.disscountPageWrapper}>
        {disscountsArray.map(dis => {
          return <CircleShapeDiscount disscountedItem={dis} />;
        })}
      </div>
    </>
  );
};

export default Discounts;
