import React from 'react'
import { useAddToCartDetailsStyles } from "./AddToCartDetails_JSS"
import { Button } from '@material-ui/core';

const AddToCartDetails = ({ article }) => {
    const classes = useAddToCartDetailsStyles();
    return (
        <div className={classes.addToCart_wrapper}>
            <div><h3>{article.article_title.en}</h3></div>
            <div><span className="articleSubTitle">{article.color.title.en}:</span> {article.color.desc.en}</div>
            <div><span className="articleSubTitle">{article.size.title.en}:</span> {article.size.desc.en}</div>
            <br />
            <Button variant="outlined" >{article.addToCart.title.en}</Button>
        </div>
    )
}

export default AddToCartDetails
