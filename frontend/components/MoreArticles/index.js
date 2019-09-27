import React, { useState } from "react";
import makeStyles from "./MoreArticles_JSS";
import { border } from "@material-ui/system";

/*
    Image should be having the size of:
    width : 300px,
    height: 300px

*/

const MoreArticles = ({ img, hasBorder }) => {
  const classes = makeStyles();
  const [isMoreInfoVisible, setIsMoreInfoVisible] = useState(false);
  function toggleMoreInfoVisibility() {
    setIsMoreInfoVisible(!isMoreInfoVisible);
  }
  return (
    <div
      className={classes.moreArticlesWrapper}
      onMouseEnter={toggleMoreInfoVisibility}
      onMouseLeave={toggleMoreInfoVisibility}
    >
      {
        hasBorder ? (
          <div className="image_wrapper">
            <img src={img.imgSrc} />
            <div
              className={
                !isMoreInfoVisible
                  ? "more_info " + classes.hideMoreInfo
                  : "more_info"
              }
            >
              More Info
        </div>
          </div>
        ) :
          (
            <div className="image_wrapper" style={{ border: "none" }}>
              <img src={img.imgSrc} />
              <div
                className={
                  !isMoreInfoVisible
                    ? "more_info " + classes.hideMoreInfo
                    : "more_info"
                }
              >
                More Info
        </div>
            </div>
          )
      }

      <div className="article_title">{img.title.en}{img.price}{img.currency}</div>
    </div>
  );
};

export default MoreArticles;
