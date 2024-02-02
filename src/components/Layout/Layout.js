import {ThemeContextProvider} from "../../utils/ThemeContext";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
// import Sponsors from "../Sponsors/Sponsors";

export default function RootLayout({ children }) {
  return (
    <ThemeContextProvider>
      <div className={`container-xl gx-0 gx-xl-4`}>
        <Header/>
        <Navigation/>

        <main>
          {children}
        </main>

        <footer>
          {/*<Sponsors/>*/}
          <Footer/>
        </footer>
      </div>
    </ThemeContextProvider>
  );
}
