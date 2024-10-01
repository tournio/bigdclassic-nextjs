import {Html, Head, Main, NextScript} from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Platypi:ital,wght@0,300;1,300&display=swap"
            rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"/>
      <script
        async
        src={"https://js.stripe.com/v3/buy-button.js"}>
      </script>
    </Head>
    <body>
    <Main/>
    <NextScript/>
    </body>
  </Html>
)

export default Document;
