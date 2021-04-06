import Head from "next/head";
import React from "react";

export const siteTitle = 'Big D Classic - What\'s Next?';

const siteHeader = () => {
  return (
    <Head>
      <title>{siteTitle}</title>
      <link rel="icon" href="/logo-50x50.jpg" />
      <meta content="text/html"
            charSet="utf-8"
            httpEquiv="Content-Type" />
      <meta content="title"
            name="{siteTitle}" />
      <meta content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport" />

      <meta
        name="description"
        content="The Big D Classic, an IGBO bowling tournament in the Dallas, Texas area"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default siteHeader;
