import React from 'react'
import Navbar from '../../../frontend/components/navbar/navbar'
import ArticleComponent from "../../../frontend/components/Articles/ArticleComponent"
const Article = () => {
    return (
        <>
            <Navbar />
            <div>
                <ArticleComponent />
            </div>
        </>
    )
}

export default Article
