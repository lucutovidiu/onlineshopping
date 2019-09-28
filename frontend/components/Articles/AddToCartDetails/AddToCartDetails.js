import React from 'react'
import { useAddToCartDetailsStyles } from "./AddToCartDetails_JSS"
import { Button } from '@material-ui/core';
import ColorSelectBox from '../ColorSelectBox/ColorSelectBox';
import SizeSelect from '../SizeSelect/SizeSelect';

const AddToCartDetails = ({ article }) => {
    const classes = useAddToCartDetailsStyles();
    return (
        <div className={classes.addToCart_wrapper}>
            <div><h3>{article.article_title.en}</h3></div>
            <div><span className="articleSubTitle">{article.color.title.en}</span><ColorSelectBox colors={article.color.desc} /></div>
            <div><span className="articleSubTitle">{article.size.title.en}</span> <SizeSelect sizes={article.size.desc.en} /></div>
            <br />
            <Button className="addToCartBtn" variant="outlined" >{article.addToCart.title.en}</Button>
        </div>
    )
}

export default AddToCartDetails
