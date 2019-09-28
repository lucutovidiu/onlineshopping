import React from 'react'
import ArticleImageGalery from './ArticleImageGalery/ArticleImageGalery'
import { useArticleStyles } from "./Article_JSS";
import { withRouter } from "next/router";
import FooterIndex from '../Footer/FooterIndex';
import { Grid } from '@material-ui/core';
import AddToCartDetails from "./AddToCartDetails/AddToCartDetails"
import uuidv1 from 'uuid/v1';

const mockArticle = {
    description: { en: "Beautifull wedding dress with custom fit posibility", ro: "Rochie de mireasa spendida cu posibilitate de modificare" },
    size: { en: "Size:", ro: "marime", size: "M" },
    returnPolicy: { en: "Return Policy", ro: "Politica Returnare", detail: { en: "Return in 30 days", ro: "Returnare in 30 de zile" } },
    composition: { en: "Composition", ro: "Compozitie", detail: [{ en: "Main: 100% POLYURETHANE", ro: "100% POLIURETANIC" }, { en: "Lining: 100% POLYESTER", ro: "Captusala: 100% POLIESTER" }] },
    article_title: { en: "Stunning Wedding Dress", ro: "Superba Rochie de mireasa" },
    color: { title: { en: "Colour", ro: "Culoare" }, desc: { en: "White", ro: "alba" } },
    size: { title: { en: "Size", ro: "Marime" }, desc: { en: "L", ro: "L" } },
    addToCart: { title: { en: "Add to cart", ro: "Adauga in cos" } },
}

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
            <FooterIndex />
        </>
    )
}

export default withRouter(ArticleComponent)
