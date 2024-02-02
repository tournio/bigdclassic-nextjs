import {useEffect} from "react";
import {Analytics} from "@vercel/analytics/react";

import '../scss/bigdclassic.scss';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap');
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <Analytics/>
    </>
  );
}
