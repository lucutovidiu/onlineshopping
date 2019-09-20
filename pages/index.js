import React from "react";
// import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";

// import "../static/styles/_index.scss";
import ShopByPicture from "../frontend/components/ShopByPicture";
import Navbar from "../frontend/components/navbar/navbar";
import CaroselIndex from "../frontend/components/Carosel/CaroselIndex";
import FooterIndex from "../frontend/components/Footer/FooterIndex";

const shopbypictureArray = [
  {
    cathegory: "Scarfs",
    backgroundImage: "../../../static/img/fashionPic/1.jpg"
  },
  {
    cathegory: "Dresses",
    backgroundImage: "../../../static/img/fashionPic/2.jpg"
  },
  {
    cathegory: "Jumpers",
    backgroundImage: "../../../static/img/fashionPic/3.jpg"
  }
];

const mockCaroselImages = [
  {
    id: 1325,
    imgSRC: "../../../static/img/carosel/1.jpg",
    imgTitle: {
      en: "Autumn2019 Romantic Stories",
      ro: "Toamna2019 Amintiri Romantice"
    },
    imgTitleColor: "pink"
  },
  {
    id: 223,
    imgSRC: "../../../static/img/carosel/2.jpg",
    imgTitle: { en: "Autumn2019 Jackets", ro: "Toamna2019 Jachete" },
    imgTitleColor: "white"
  },
  {
    id: 32,
    imgSRC: "../../../static/img/carosel/3.jpg",
    imgTitle: { en: "Autumn2019 Jumpers", ro: "Toamna2019 Pulovere" },
    imgTitleColor: "#ecf0f1"
  },
  {
    id: 44,
    imgSRC: "../../../static/img/carosel/4.jpg",
    imgTitle: {
      en: "Autumn2019 Sweet Flowers",
      ro: "Toamna2019 Flori Frumoase"
    },
    imgTitleColor: "#8e44ad"
  }
];
export default function Index() {
  return (
    <>
      <Navbar></Navbar>
      <CaroselIndex imageArray={mockCaroselImages} />
      {shopbypictureArray.map((cathegory, key) => {
        return <ShopByPicture key={key} pictureData={cathegory} />;
      })}
      <FooterIndex />
    </>
    // <Container maxWidth="sm">
    //   <Box my={4}>
    //     <Typography variant="h4" component="h1" gutterBottom>
    //       Next.js example
    //     </Typography>
    //   </Box>
    // </Container>
  );
}
