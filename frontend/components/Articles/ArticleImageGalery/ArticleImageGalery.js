import React from 'react'
import { useArticleImageGaleryStyles } from "./ArticleImageGalery_JSS"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import uuidv1 from 'uuid/v1';

const mockPictures = [
    { id: 1, src: "/static/img/acticles/1/1.jpg", title: "dress1" },
    { id: 2, src: "/static/img/acticles/1/2.jpg", title: "dress2" },
    { id: 3, src: "/static/img/acticles/1/3.jpg", title: "dress3" },
    // { id: 4, src: "/static/img/acticles/1/5.jpg", title: "dress5" },
].map((item, key) => {
    if (key === 0) return { id: item.id, src: item.src, title: item.title, isDisplayed: true }
    else return { id: item.id, src: item.src, title: item.title, isDisplayed: false }
})

const ArticleImageGalery = () => {
    const classes = useArticleImageGaleryStyles();
    const [currentPicture, setCurrentPicture] = React.useState(mockPictures);

    function handledDifferentPicture(id) {
        setCurrentPicture(pictures => {
            let newPictures = pictures.map(pic => {
                if (pic.id === id) {
                    pic.isDisplayed = true;
                    return pic;
                } else { pic.isDisplayed = false; return pic };
            })
            return newPictures;
        })
    }

    function handleNextPrevPictureSelect(type) {
        let pictureSlidesLenght = currentPicture.length;
        let currentPicIndex = currentPicture.findIndex(pic => pic.isDisplayed === true),
            foundIndex = 0;
        switch (type) {
            case "PREV": {
                if (currentPicIndex === 0)
                    foundIndex = pictureSlidesLenght - 1;
                else foundIndex = currentPicIndex - 1

                return setCurrentPicture(picture => {
                    return picture.map((item, key) => {
                        if (key === foundIndex) {
                            item.isDisplayed = true;
                            return item;
                        } else {
                            item.isDisplayed = false;
                            return item;
                        }
                    })
                })
            }
            case "NEXT": {
                if (currentPicIndex === pictureSlidesLenght - 1)
                    foundIndex = 0
                else foundIndex = currentPicIndex + 1

                return setCurrentPicture(picture => {
                    return picture.map((item, key) => {
                        if (key === foundIndex) {
                            item.isDisplayed = true;
                            return item;
                        } else {
                            item.isDisplayed = false;
                            return item;
                        }
                    })
                })
            }
        }
    }

    return (
        <div className={classes.articleImageGalery_wrapper}>
            <div className="side_picture_panel">
                {
                    currentPicture.map(item => {
                        if (item.isDisplayed)
                            return <img onClick={() => handledDifferentPicture(item.id)} key={uuidv1()} className={classes.showBottomBorder} src={item.src} alt={item.title} />
                        else
                            return <img onClick={() => handledDifferentPicture(item.id)} key={uuidv1()} src={item.src} alt={item.title} />
                    })
                }
            </div>
            <div className="picture_display_panel">
                {
                    currentPicture.filter(item => item.isDisplayed === true).map(item => {
                        return <div key={uuidv1()} className="picture_image"><img src={item.src} alt={item.title} /></div>
                    })
                }
                <div onClick={() => handleNextPrevPictureSelect("PREV")} className="prev_picture_chevroux"><ArrowBackIosIcon /></div>
                <div onClick={() => handleNextPrevPictureSelect("NEXT")} className="next_picture_chevroux"><ArrowForwardIosIcon /></div>
                <div className="picture_number">Article Number <b>#1233453245</b></div>
            </div>
        </div>
    )
}

export default ArticleImageGalery
