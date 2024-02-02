import Head from 'next/head';

export const siteTitle = 'Big D Classic 2024 - Dallas, TX';

const Header = () => (
  <Head>
    <title>{siteTitle}</title>
    <meta httpEquiv={"Content-Type"} content={"text/html; charset=utf-8"} />
    <meta name={"title"} content={siteTitle} />
    <meta name={"viewport"} content={"width=device-width, initial-scale=1.0, shrink-to-fit=yes"} />
    <meta name={'description'} content={'The Big D Classic is an IGBO-affiliated bowling tournament, taking place each August in Dallas.'} />
    <meta name={'twitter:card'} content={'summary_large_image'} />
    <link rel="icon" type="image/x-icon" href="/logo-50x50.jpg" />
  </Head>
);

export default Header;
