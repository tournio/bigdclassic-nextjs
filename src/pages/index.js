import RootLayout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import MainText from "../components/MainText/MainText";
import Spotlight from "../components/Spotlight/Spotlight";
import Location from "../components/Location/Location";
import Hotel from "../components/Hotel/Hotel";
import Schedule from "../components/Schedule/Schedule";
import Links from "../components/Links/Links";

const MainPage = () => {
  return (
    <div>

      <section>
        <Hero/>
      </section>

      <section>
        <div className={`row`}>
          <div className={`col-12 col-md-7 col-lg-8`}>
            <MainText />
          </div>
          <div className={`d-none d-md-block col-md-5 col-lg-4`}>
            <Spotlight/>
          </div>
        </div>
      </section>

      <Location/>

      <Schedule/>

      <Hotel/>
      <Links/>
    </div>
  )
}

MainPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
}

export default MainPage;
