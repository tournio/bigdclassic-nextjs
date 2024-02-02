import {Html, Head, Main, NextScript} from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link
        href={'https://fonts.googleapis.com/css2?family=League+Spartan&display=swap'}
        rel={'stylesheet'}/>
      <link
        href={'https://fonts.googleapis.com/css2?family=Nunito&display=swap'}
        rel={'stylesheet'}/>
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
