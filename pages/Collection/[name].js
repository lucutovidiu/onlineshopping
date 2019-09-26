import React from "react";
import Navbar from "../../frontend/components/navbar/navbar";
import { withRouter } from "next/router";
import FooterIndex from "../../frontend/components/Footer/FooterIndex"
import CollectionFilterMenu from "../../frontend/components/Collection/CollectionFilterMenu/CollectionFilterMenuComponent"
import CollectionMenuItems from "../../frontend/components/Collection/CollectionMenuItems/CollectionMenuItemsComponent"
import { Box, Typography, Container } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import { checkVariableOfUndefined } from "../../frontend/helperFunctions"
import { collectionStyles } from "../../frontend/components/Collection/Collection_JSS"

export default withRouter(function Contact(props) {
    const classes = collectionStyles();
    const { name } = props.router.query;
    // console.log(props.router.query.name)
    return (
        <>
            <Navbar />
            <Container className={classes.bodyWrapper} maxWidth="xl" style={{ paddingTop: "1rem", paddingBottom: "1rem" }} >
                {
                    checkVariableOfUndefined(name) ? <div className="collection_loading_spinner"><CircularProgress /></div> : (
                        <>
                            <Box><Typography component="h1" className="collection_title">{name.includes("New") ? "New" : name}</Typography></Box>
                            <CollectionFilterMenu />
                            <CollectionMenuItems />
                        </>
                    )
                }

            </Container>
            {/* {
                !checkVariableOfUndefined(props.router.query.name) && <FooterIndex />
            } */}
        </>
    );
})