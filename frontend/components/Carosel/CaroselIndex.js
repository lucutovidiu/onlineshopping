import React from "react";
import styles from "./Carosel_JSS";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { Grid, Typography } from "@material-ui/core";

function setCurrentImage(imageArray) {
  if (
    typeof imageArray === "undefined" ||
    imageArray === null ||
    imageArray.length === 0
  ) {
    return null;
  } else {
    return imageArray[0];
  }
}

const CaroselIndex = ({ imageArray }) => {
  const classes = styles();
  const [currentImage, setcurrentImage] = React.useState(
    setCurrentImage(imageArray)
  );
  //   React.useEffect(() => {
  //     setTimeout(() => {
  //       nextImageBtn();
  //       return () => {
  //         setcurrentImage(null);
  //       };
  //     }, 4500);
  //   });
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
      <div className="carosel_inner_wrapper">
        <img
          src={currentImage.imgSRC}
          alt={currentImage.imgTitle.en}
          className={"carosel_image " + classes.animateMe}
        />
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

        {/* <div className="carosel_indicator">
          <div className="carosel_indicator_bar">aaaa</div>
        </div> */}
      </div>
    </Grid>
  );
};

export default CaroselIndex;
