import React, { useRef } from "react";
import { Grid, Box } from "@material-ui/core";
import styles from "./NewlyAdded_JSS";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Link from "next/link";

/*
    Image should be having the size of:
    width : 300px,
    height: 300px

*/

const NewlyAdded = ({ imagesArray }) => {
  const classes = styles();
  const scrollCaroselRef = useRef(null);

  function scrollCarosel(direction) {
    if (direction === "RIGHT") {
      scrollCaroselRef.current.scrollLeft =
        scrollCaroselRef.current.scrollLeft + 300;
    }
    if (direction === "LEFT") {
      scrollCaroselRef.current.scrollLeft =
        scrollCaroselRef.current.scrollLeft - 300;
    }
  }

  return (
    <Grid container className={classes.main_wrapper}>
      <Box className="carosel_head_title">Newly Added</Box>
      <div ref={scrollCaroselRef} className="slider_wrapper">
        {imagesArray.map(img => (
          <div key={img.id} className="image_wrapper">
            <div className="image_container">
              <Link href={img.link}>
                <a>
                  <img src={img.imgSrc} alt={img.title} />
                </a>
              </Link>
              {/* <div className="image_overlay">More Info</div> */}
            </div>
            <Box fontWeight="bold" fontSize="large">
              {img.title.en}
            </Box>
          </div>
        ))}
      </div>
      <div className="slider_controls">
        <div className="ChevronLeftIcon" onClick={() => scrollCarosel("LEFT")}>
          <ChevronLeftIcon />
        </div>
        <div
          className="ChevronRightIcon"
          onClick={() => scrollCarosel("RIGHT")}
        >
          <ChevronRightIcon />
        </div>
      </div>
    </Grid>
  );
};

export default NewlyAdded;
