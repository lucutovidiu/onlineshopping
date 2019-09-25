import React from "react";
import useSignInStyles from "./SignIn_JSS";
import Link from "next/link";
import { Grid, TextField, Button, Typography } from "@material-ui/core";

const SignIn = () => {
  const classes = useSignInStyles();
  return (
    <div className={classes.signin_whole_page_main_wrapper}>
      <div className="signin_main_wrapper">
        {/* <div className="signin_close_modal">X</div> */}
        <div className="signin_title_wrapper">
          <div className="title">SIGN IN</div>
          <div className="signin_signup_title">
            Not registered?
            <Link href="#?">
              <a>Sign up</a>
            </Link>
          </div>
        </div>
        <form className="sigin_form" noValidate autoComplete="off">
          <Grid container spacing={5}>
            <Grid item={true} xs={12} md={5}>
              <Grid
                container
                //   md={5}
                direction="column"
                style={{ paddingLeft: "1rem" }}
                justify="center"
              >
                <TextField
                  id="outlined-name"
                  label="Email"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Password"
                  margin="normal"
                  variant="outlined"
                />
                <Grid item className="sigin_forgot_password">
                  <Link href="#?">
                    <a>Forgot Password?</a>
                  </Link>
                </Grid>
                <Button variant="outlined" color="inherit">
                  Login
                </Button>
              </Grid>
            </Grid>
            <Grid item={true} md={2} xs={12}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                style={{ height: "100%" }}
              >
                <div>- OR -</div>
              </Grid>
            </Grid>
            <Grid item={true} md={5} xs={12}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                style={{ height: "100%" }}
                className="signin_with_facebook"
              >
                <Link href="#?">
                  <Button color="primary" variant="contained">
                    Login with Facebook
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
