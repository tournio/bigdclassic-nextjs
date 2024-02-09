import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

      <Hero/>

      <section>
        <Row>
          <Col xs={12} md={8}>
            <MainText />
          </Col>
          <Col xs={12} md={4}>
            <Spotlight/>
          </Col>
        </Row>
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
