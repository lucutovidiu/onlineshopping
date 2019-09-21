import React from "react";
import styles from "./Footer_JSS";
import EmailIcon from "@material-ui/icons/Email";
import SendIcon from "@material-ui/icons/Send";
import {
  Grid,
  Typography,
  Box,
  Input,
  InputAdornment,
  Button
} from "@material-ui/core";
import Link from "next/link";
import FacebookIcon from "@material-ui/icons/Facebook";

const mockEshopMenuFooter = [
  {
    title: {
      en: "Size Guide",
      ro: "Lista Marimi"
    },
    url: "#?"
  },
  {
    title: {
      en: "Privacy Policy",
      ro: "Politica Site"
    },
    url: "#?"
  },
  {
    title: {
      en: "Made To Measure",
      ro: "Masuri La Comanda"
    },
    url: "#?"
  }
];

const FooterIndex = () => {
  const classes = styles();
  // console.log(classes.getInTouch);
  return (
    <Grid container className={classes.footerOuterWrapper}>
      <Grid container className="footerInnerWrapper">
        <Grid item md={4} xs={12} sm={12}>
          <Box letterSpacing={2} fontSize="1.5rem" padding="1rem 0 0.5rem 1rem">
            My-eshopping
          </Box>
          <div className="my_eshopping_links">
            {mockEshopMenuFooter.map((link, key) => (
              <Link key={key + link} href={link.url}>
                <a>{link.title.en}</a>
              </Link>
            ))}
          </div>
        </Grid>
        <Grid item md={4} xs={12} sm={12}>
          <Box letterSpacing={2} fontSize="1.5rem" padding="1rem 0 0.5rem 1rem">
            Follow Us
          </Box>

          <Link href="#?">
            <div className={classes.FollowUs}>
              <a>
                <Box>Facebook</Box>
                <FacebookIcon fontSize="large" />
              </a>
            </div>
          </Link>
        </Grid>
        <Grid item md={4} xs={12} sm={12}>
          <Box letterSpacing={2} fontSize="1.5rem" padding="1rem 0 0.5rem 1rem">
            Keep In Touch
          </Box>
          <form action="#?" className={classes.keepInTouch}>
            <Input
              autoComplete="off"
              placeholder="Your email..."
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              }
            ></Input>
            <Button variant="outlined" className="subscribeToNewsletter">
              Subscribe
            </Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterIndex;
