import Sponsors from "../Sponsors/Sponsors";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div>
      <Sponsors/>
      <hr />
      <Row>
        <Col>
          <p className={'d-flex justify-content-center flex-wrap pb-0'}>
          <span>
            &copy; 2024&nbsp;
          </span>
            <span>
            Big D Classic
          </span>
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default Footer;
