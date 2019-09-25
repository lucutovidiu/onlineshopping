import { makeStyles } from "@material-ui/styles";

const useSignInStyles = makeStyles(theme => ({
  "@keyframes animate_popup": {
    from: {
      opacity: 0,
      transform: "translate(-50%, 15%)"
    },
    to: {
      opacity: 1,
      transform: "translate(-50%, 5%)"
    }
  },
  signin_whole_page_main_wrapper: {
    position: "absolute",
    width: "100%",
    height: "calc(100% - (82px + 32px))",
    background: theme.palette.signIn.componentBackgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    // marginTop: "-1rem",
    //   overflow-y: hidden,
    "& .signin_main_wrapper": {
      padding: "2rem 1rem",
      borderRadius: "3px",
      width: "59%",
      maxWidth: "800px",
      height: "auto",
      position: "absolute",
      left: "50%",
      transform: "translate(-50%, 5%)",
      backgroundColor: theme.palette.signIn.background,
      boxShadow: `0px 1px 3px 0px ${theme.palette.signIn.boxShadow}`,
      animation: "$animate_popup 1s forwards",
      ["@media screen and (max-width: 571px)"]: {
        width: "85%"
      },
      "& .signin_close_modal": {
        position: "absolute",
        color: "black",
        fontSize: "1.2rem",
        right: "15px",
        top: "10px"
      },
      "& .signin_title_wrapper": {
        textAlign: "center",
        textTransform: "uppercase",
        "& .title": {
          fontWeight: "bold",
          padding: "0 0 0.2rem 0",
          fontSize: "1rem"
        },
        "& .signin_signup_title a": {
          textDecoration: "none",
          color: theme.palette.signIn.link,
          fontWeight: "400",
          paddingLeft: "0.5rem"
        }
      },
      "& .sigin_form": {
        //   background-color: red,
        paddingTop: "1rem",
        "& .sigin_forgot_password": {
          alignSelf: "flex-end",
          padding: "0rem 0 1rem 0",
          "& a": {
            textDecoration: "none",
            color: theme.palette.signIn.link
          }
        },
        "& .signin_with_facebook": {
          ["@media all and (max-width: 959px)"]: {
            flexDirection: "row",
            justifyContent: "center"
          }
        }
      }
    }
  }
}));

export default useSignInStyles;
