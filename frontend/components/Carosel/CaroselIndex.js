import React from "react";
import styles from "./Carosel_JSS";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { Grid, Typography } from "@material-ui/core";
import "animate.css";
import { animationArray, getRndInteger, setCurrentImage } from "./helper";

/*
  image should have below sizes:
  width 1260
  height 562

*/

const CaroselIndex = ({ imageArray }) => {
  const classes = styles();
  const [currentImage, setcurrentImage] = React.useState({
    ...setCurrentImage(imageArray),
    firstAnimation: "bounce"
  });
  // const [firstAnimation, setFirstAnimation] = React.useState("bounce");
  //
  //
  React.useEffect(() => {
    let timeout = setInterval(() => {
      nextImageBtn();
    }, 4500);
    return () => {
      clearInterval(timeout);
    };
  }, [currentImage]);
  function nextImageBtn() {
    let currentIndex = imageArray.findIndex(img => img.id === currentImage.id);
    if (currentIndex + 1 === imageArray.length) {
      setcurrentImage(imageArray[0]);
    } else setcurrentImage(imageArray[currentIndex + 1]);
  }

  function previousImageBtn() {
    let currentIndex = imageArray.findIndex(img => img.id === currentImage.id);
    if (currentIndex === 0) {
      setcurrentImage(imageArray[imageArray.length - 1]);
    } else setcurrentImage(imageArray[currentIndex - 1]);
  }

  if (
    typeof imageArray === "undefined" ||
    imageArray === null ||
    imageArray.length === 0
  ) {
    return (
      <div className={classes.carosel_outer_wrapper}>
        <div className={classes.nullImageDisplay}>
          <Typography>No Carosel Images Found</Typography>
        </div>
      </div>
    );
  }
  return (
    <Grid container className={classes.carosel_outer_wrapper}>
      <div className={"carosel_inner_wrapper "}>
        {imageArray.map((img, key) => {
          if (img.id === currentImage.id) {
            let an = getRndInteger(0, animationArray.length);
            let fAni =
              typeof currentImage.firstAnimation !== "undefined"
                ? currentImage.firstAnimation
                : animationArray[an];
            // console.log("animation:", fAni);
            return (
              <div key={img.id} className="carosel_image">
                <img
                  key={key}
                  className={"animated " + fAni}
                  src={img.imgSRC}
                  alt={img.imgTitle.en}
                />
                <div className={"carosel_image_overlay animated " + fAni}></div>
              </div>
            );
          } else {
            return (
              <img
                key={key}
                className={classes.hide}
                src={img.imgSRC}
                alt={img.imgTitle.en}
              />
            );
          }
        })}

        <div
          className="carosel_text_left"
          style={{
            color: currentImage.imgTitleColor
          }}
        >
          <Typography className="carosel_text_title">
            {currentImage.imgTitle.en}
          </Typography>
          <Typography className="see_more_btn">
            See More &nbsp;
            <DoubleArrowIcon />
          </Typography>
        </div>
        <ChevronLeftIcon
          className="carosel_arrow_left"
          onClick={previousImageBtn}
        />

        <ChevronRightIcon
          className="carosel_arrow_right"
          onClick={nextImageBtn}
        />
      </div>
    </Grid>
  );
};

export default CaroselIndex;
