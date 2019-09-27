import React from "react";
import Navbar from "../frontend/components/navbar/navbar";
import CircleShapeDiscount from "../frontend/components/circleShapeDiscount";
import useCircleShapePageStyles from "../frontend/components/circleShapeDiscount/circleShapeDiscountPage-JSS";
import { Box } from "@material-ui/core";
import FooterIndex from "../frontend/components/Footer/FooterIndex";
import MoreArticles from "../frontend/components/MoreArticles";

const disscountsArray = [
  {
    disscountValue: "12",
    sellingCurrency: "£",
    imageSrc: "../../../static/img/disscounts/1.jpg"
  },
  {
    disscountValue: "30",
    sellingCurrency: "£",
    imageSrc: "../../../static/img/disscounts/2.jpg"
  },
  {
    disscountValue: "20",
    sellingCurrency: "£",
    imageSrc: "../../../static/img/disscounts/3.jpg"
  }
];

const mockMoreArticles = [
  {
    id: 1,
    title: { en: "Dress for only ", ro: "Rochie la doar: " },
    imgSrc: "../../../static/img/newlyAdded/thumbnail/1.jpg",
    price: 19,
    currency: "£"
  },
  {
    id: 2,
    title: { en: "Dress for only ", ro: "Rochie la doar: " },
    imgSrc: "../../../static/img/newlyAdded/thumbnail/2.jpg",
    price: 12,
    currency: "£"
  },
  {
    id: 3,
    title: { en: "Dress for only ", ro: "Rochie la doar: " },
    imgSrc: "../../../static/img/newlyAdded/thumbnail/3.jpg",
    price: 10,
    currency: "£"
  },
  {
    id: 4,
    title: { en: "Dress for only ", ro: "Rochie la doar: " },
    imgSrc: "../../../static/img/newlyAdded/thumbnail/4.jpg",
    price: 11,
    currency: "£"
  },
  {
    id: 5,
    title: { en: "Dress for only ", ro: "Rochie la doar: " },
    imgSrc: "../../../static/img/newlyAdded/thumbnail/5.jpg",
    price: 17,
    currency: "£"
  },
  {
    id: 6,
    title: { en: "Dress for only ", ro: "Rochie la doar: " },
    imgSrc: "../../../static/img/newlyAdded/thumbnail/6.jpg",
    price: 14,
    currency: "£"
  },
  {
    id: 7,
    title: { en: "Dress for only ", ro: "Rochie la doar: " },
    imgSrc: "../../../static/img/newlyAdded/thumbnail/7.jpg",
    price: 13,
    currency: "£"
  },
  {
    id: 8,
    title: { en: "Dress for only ", ro: "Rochie la doar: " },
    imgSrc: "../../../static/img/newlyAdded/thumbnail/8.jpg",
    price: 12,
    currency: "£"
  }
];

const Discounts = () => {
  const classes = useCircleShapePageStyles();
  return (
    <>
      <Navbar></Navbar>
      <Box component="h1" className={classes.offersPageTitle}>
        Latest Offers
      </Box>
      <div className={classes.disscountPageWrapper}>
        {disscountsArray.map((dis, key) => {
          return <CircleShapeDiscount key={key + dis} disscountedItem={dis} />;
        })}
      </div>
      <Box component="h1" className={classes.offersPageTitle}>
        More Articles
      </Box>
      <div className={classes.disscountPageWrapper}>
        {mockMoreArticles.map(img => (
          <MoreArticles hasBorder={true} key={img.id} img={img} />
        ))}
      </div>

      <FooterIndex />
    </>
  );
};

export default Discounts;
