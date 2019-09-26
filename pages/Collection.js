import React from "react";
import Router from 'next/router'

export default function Contact() {
  return (
    <>
      Redirect
    </>
  );
}
Contact.getInitialProps = function (ctx) {
  if (ctx && ctx.req) {
    ctx.res.writeHead(302, { Location: `/Collection/New-Clothes` })
    ctx.res.end()
  } else {
    Router.push(`/Collection/New-Clothes`)
  }
}
