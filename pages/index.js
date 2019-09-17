import React from "react";
// import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";

// import "../static/styles/_index.scss";
import ShopByPicture from "../frontend/components/ShopByPicture";
import Navbar from "../frontend/components/navbar/navbar";

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

export default function Index() {
  return (
    <>
      <Navbar></Navbar>
      {shopbypictureArray.map((cathegory, key) => {
        return <ShopByPicture key={key} pictureData={cathegory} />;
      })}
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
