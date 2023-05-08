import '../style/big-d-bs.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../style/index.css'
import {Analytics} from "@vercel/analytics/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics/>
    </>
  );
}
