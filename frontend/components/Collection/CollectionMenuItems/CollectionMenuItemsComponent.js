import React from 'react'
import MoreArticles from "../../MoreArticles";

const mockMoreArticles = [
    {
        id: 1,
        title: { en: "Dress for only ", ro: "Rochie la doar: " },
        imgSrc: "../../../static/img/newlyAdded/thumbnail/1.jpg",
        link: "/Collection/Article/123254654841",
        price: 19,
        currency: "£"
    },
    {
        id: 2,
        title: { en: "Dress for only ", ro: "Rochie la doar: " },
        imgSrc: "../../../static/img/newlyAdded/thumbnail/2.jpg",
        link: "/Collection/Article/123254654841",
        price: 12,
        currency: "£"
    },
    {
        id: 3,
        title: { en: "Dress for only ", ro: "Rochie la doar: " },
        imgSrc: "../../../static/img/newlyAdded/thumbnail/3.jpg",
        link: "/Collection/Article/123254654841",
        price: 10,
        currency: "£"
    },
    {
        id: 4,
        title: { en: "Dress for only ", ro: "Rochie la doar: " },
        imgSrc: "../../../static/img/newlyAdded/thumbnail/4.jpg",
        link: "/Collection/Article/123254654841",
        price: 11,
        currency: "£"
    },
    {
        id: 5,
        title: { en: "Dress for only ", ro: "Rochie la doar: " },
        imgSrc: "../../../static/img/newlyAdded/thumbnail/5.jpg",
        link: "/Collection/Article/123254654841",
        price: 17,
        currency: "£"
    },
    {
        id: 6,
        title: { en: "Dress for only ", ro: "Rochie la doar: " },
        imgSrc: "../../../static/img/newlyAdded/thumbnail/6.jpg",
        link: "/Collection/Article/123254654841",
        price: 14,
        currency: "£"
    },
    {
        id: 7,
        title: { en: "Dress for only ", ro: "Rochie la doar: " },
        imgSrc: "../../../static/img/newlyAdded/thumbnail/7.jpg",
        link: "/Collection/Article/123254654841",
        price: 13,
        currency: "£"
    },
    {
        id: 8,
        title: { en: "Dress for only ", ro: "Rochie la doar: " },
        imgSrc: "../../../static/img/newlyAdded/thumbnail/8.jpg",
        link: "/Collection/Article/123254654841",
        price: 12,
        currency: "£"
    }
];


const CollectionMenuItems = () => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                // paddingLeft: "0.4rem",
                justifyContent: "space-around"
            }}
        >
            {mockMoreArticles.map(img => (
                <MoreArticles key={img.id} img={img} />
            ))}
        </div>
    )
}

export default CollectionMenuItems
