import RootLayout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
// import Location from "../components/Location/Location";
// import Hotel from "../components/Hotel/Hotel";
// import Schedule from "../components/Schedule/Schedule";
// import Links from "../components/Links/Links";
// import MainText from "../components/MainText/MainText";

const MainPage = () => {
  return (
    <div>

      <Hero/>
      {/*<MainText/>*/}
      {/*<Location/>*/}
      {/*<Schedule/>*/}
      {/*<Hotel/>*/}
      {/*<RegisterCTA/>*/}
      {/*<Links/>*/}
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
