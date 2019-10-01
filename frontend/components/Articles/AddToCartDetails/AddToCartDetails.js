import React from 'react'
import { useAddToCartDetailsStyles } from "./AddToCartDetails_JSS"
import { Button } from '@material-ui/core';
import ColorSelectBox from '../ColorSelectBox/ColorSelectBox';
import SizeSelect from '../SizeSelect/SizeSelect';
import Rating from '@material-ui/lab/Rating';

const AddToCartDetails = ({ article }) => {
    const [value, setValue] = React.useState(2);
    const classes = useAddToCartDetailsStyles();
    return (
        <div className={classes.addToCart_wrapper}>
            <div><h3>{article.article_title.en}</h3></div>
            <div className="rating_box">
                {/* <Typography component="h1" variant="subtitle1">Rating</Typography> */}
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </div>
            <div className="articleSubTitle"><span>{article.color.title.en}</span><ColorSelectBox colors={article.color.desc} /></div>
            <div className="articleSubTitle_size articleSubTitle"><span>{article.size.title.en}</span> <SizeSelect sizes={article.size.desc.en} /></div>
            <br />
            <Button className="addToCartBtn" variant="outlined" >{article.addToCart.title.en}</Button>
        </div>
    )
}

export default AddToCartDetails
