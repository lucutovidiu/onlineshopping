import React from "react";
// import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";

// import "../static/styles/_index.scss";
import dynamic from "next/dynamic";
import ShopByPicture from "../frontend/components/ShopByPicture";
import Navbar from "../frontend/components/navbar/navbar";
// import CaroselIndex from "../frontend/components/Carosel/CaroselIndex";
import FooterIndex from "../frontend/components/Footer/FooterIndex";
import NewlyAdded from "../frontend/components/newlyAdded/NewlyAdded";
const CaroselIndex = dynamic(
  () => import("../frontend/components/Carosel/CaroselIndex"),
  {
    ssr: false
  }
);

const shopbypictureArray = [
  {
    description: {
      cathegory: { en: "Scarfs", ro: "Fulare" },
      title: { en: "Shop By", ro: "Cumpara dupa" }
    },
    btnName: { en: "Shop Now", ro: "Cumpara Acum" },
    backgroundImage: "../../../static/img/fashionPic/1.jpg"
  },
  {
    description: {
      cathegory: { en: "Dresses", ro: "Rochii" },
      title: { en: "Shop By", ro: "Cumpara dupa" }
    },
    btnName: { en: "Shop Now", ro: "Cumpara Acum" },
    backgroundImage: "../../../static/img/fashionPic/2.jpg"
  },
  {
    description: {
      cathegory: { en: "Jumpers", ro: "Pulovere" },
      title: { en: "Shop By", ro: "Cumpara dupa" }
    },
    btnName: { en: "Shop Now", ro: "Cumpara Acum" },
    backgroundImage: "../../../static/img/fashionPic/3.jpg"
  },
  {
    description: {
      cathegory: { en: "Skirts", ro: "Fuste" },
      title: { en: "Shop By", ro: "Cumpara dupa" }
    },
    btnName: { en: "Shop Now", ro: "Cumpara Acum" },
    backgroundImage: "../../../static/img/fashionPic/4.jpg"
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
    imgTitleColor: "#ecf0f1"
  }
];
const mockNewlyAdded = [
  {
    id: 1,
    title: { en: "Dress", ro: "Rochie" },
    imgSrc: "../../../static/img/newlyAdded/thumbnail/1.jpg"
  },
  {
    id: 2,
    title: { en: "Dress", ro: "Rochie" },
    imgSrc: "../../../static/img/newlyAdded/thumbnail/2.jpg"
  },
  {
    id: 3,
    title: { en: "Dress", ro: "Rochie" },
    imgSrc: "../../../static/img/newlyAdded/thumbnail/3.jpg"
  },
  {
    id: 4,
    title: { en: "Dress", ro: "Rochie" },
    imgSrc: "../../../static/img/newlyAdded/thumbnail/4.jpg"
  },
  {
    id: 5,
    title: { en: "Dress", ro: "Rochie" },
    imgSrc: "../../../static/img/newlyAdded/thumbnail/5.jpg"
  },
  {
    id: 6,
    title: { en: "Dress", ro: "Rochie" },
    imgSrc: "../../../static/img/newlyAdded/thumbnail/6.jpg"
  },
  {
    id: 7,
    title: { en: "Dress", ro: "Rochie" },
    imgSrc: "../../../static/img/newlyAdded/thumbnail/7.jpg"
  },
  {
    id: 8,
    title: { en: "Dress", ro: "Rochie" },
    imgSrc: "../../../static/img/newlyAdded/thumbnail/8.jpg"
  }
];
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <CaroselIndex imageArray={mockCaroselImages} />
      <NewlyAdded imagesArray={mockNewlyAdded} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "94%",
          margin: "0 auto"
        }}
      >
        {shopbypictureArray.map((cathegory, key) => {
          return <ShopByPicture key={key} pictureData={cathegory} />;
        })}
      </div>
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
