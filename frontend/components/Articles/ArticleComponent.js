import React from 'react'
import ArticleImageGalery from './ArticleImageGalery/ArticleImageGalery'
import { useArticleStyles } from "./Article_JSS";
import { withRouter } from "next/router";
import FooterIndex from '../Footer/FooterIndex';
import { Grid } from '@material-ui/core';
import AddToCartDetails from "./AddToCartDetails/AddToCartDetails"
import uuidv1 from 'uuid/v1';
import MoreArticles from '../MoreArticles';

const mockArticle = {
    description: { en: "Beautifull wedding dress with custom fit posibility", ro: "Rochie de mireasa spendida cu posibilitate de modificare" },
    size: { en: "Size:", ro: "marime", size: "M" },
    returnPolicy: { en: "Return Policy", ro: "Politica Returnare", detail: { en: "Return in 30 days", ro: "Returnare in 30 de zile" } },
    composition: { en: "Composition", ro: "Compozitie", detail: [{ en: "Main: 100% POLYURETHANE", ro: "100% POLIURETANIC" }, { en: "Lining: 100% POLYESTER", ro: "Captusala: 100% POLIESTER" }] },
    article_title: { en: "Stunning Wedding Dress", ro: "Superba Rochie de mireasa" },
    color: { title: { en: "Colour", ro: "Culoare" }, desc: ["rgb(255,255,215)", "blue", "green"] },
    size: { title: { en: "Size", ro: "Marime" }, desc: { en: [{ size: "L", available: true }, { size: "M", available: false }, { size: "XS", available: true }], ro: [{ size: "L", available: true }, { size: "M", available: false }, { size: "XS", available: true }] } },
    addToCart: { title: { en: "Add to cart", ro: "Adauga in cos" } },
}

const mockRecomandedArticles = [
    {
        id: 5,
        title: { en: "Dress for only ", ro: "Rochie la doar: " },
        imgSrc: "/static/img/newlyAdded/thumbnail/5.jpg",
        link: "/Collection/Article/123254654841",
        price: 17,
        currency: "£"
    },
    {
        id: 6,
        title: { en: "Dress for only ", ro: "Rochie la doar: " },
        imgSrc: "/static/img/newlyAdded/thumbnail/6.jpg",
        link: "/Collection/Article/123254654841",
        price: 14,
        currency: "£"
    },
    {
        id: 7,
        title: { en: "Dress for only ", ro: "Rochie la doar: " },
        imgSrc: "/static/img/newlyAdded/thumbnail/7.jpg",
        link: "/Collection/Article/123254654841",
        price: 13,
        currency: "£"
    },
    {
        id: 8,
        title: { en: "Dress for only ", ro: "Rochie la doar: " },
        imgSrc: "/static/img/newlyAdded/thumbnail/8.jpg",
        link: "/Collection/Article/123254654841",
        price: 12,
        currency: "£"
    }
]

const ArticleComponent = (props) => {
    const classes = useArticleStyles();
    // console.log(props.router.query.id);
    return (
        <>
            <Grid container className={classes.article_main_wrapper}>
                <Grid className="image_galery" item xs={12} sm={12} md={6}>
                    <ArticleImageGalery />
                    <div className="article_description">
                        {mockArticle.description.en}
                    </div>
                    <div className="return_details">
                        <div><h3>{mockArticle.returnPolicy.en}</h3>
                            <div>{mockArticle.returnPolicy.detail.en}</div>
                        </div>
                        <div><h3>{mockArticle.composition.en}</h3>
                            {
                                mockArticle.composition.detail.map(item => {
                                    return <div key={uuidv1()}>
                                        {item.en}
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </Grid>
                <Grid className="image_galery" item xs={12} sm={12} md={6}>
                    <AddToCartDetails article={mockArticle} />

                </Grid>
            </Grid>
            <Grid container className={classes.recomanded_articles_wrapper}>
                <h2 className="recomanded_title">RECOMMENDED</h2>
                <div className="recomandation_articles">
                    {
                        mockRecomandedArticles.map(item => {
                            return <MoreArticles key={item.id} img={item} />
                        })
                    }
                </div>
            </Grid>
            <FooterIndex />
        </>
    )
}

export default withRouter(ArticleComponent)
