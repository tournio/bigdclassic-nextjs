import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Carousel} from "react-bootstrap";
import Image from "next/image";

import hotelLogo from '../../images/hotel/logo.jpg';

import hotelImageBar1 from '../../images/hotel/bar1.jpeg';
import hotelImageBar2 from '../../images/hotel/bar2.jpeg';
import hotelImageDining from '../../images/hotel/dining.jpeg';
import hotelImageExterior from '../../images/hotel/exterior.jpeg';
import hotelImageFitness from '../../images/hotel/fitness.jpeg';
import hotelImageInterior from '../../images/hotel/interior.jpeg';
import hotelImageLobby from '../../images/hotel/lobby.jpeg';
import hotelImageRoom1 from '../../images/hotel/room1.jpeg';
import hotelImageRoom2 from '../../images/hotel/room2.jpeg';
import hotelImageRoom3 from '../../images/hotel/room3.jpeg';
import hotelImageRoom4 from '../../images/hotel/room4.jpeg';

import styles from './Hotel.module.scss';

const Hotel = () => {
  const hotelUrl = 'https://www.marriott.com/events/start.mi?id=1710278630415&key=GRP';
  const hotelName = 'Sheraton Dallas Hotel by the Galleria';
  const features = [
    'King or Double guest rooms',
    'Room rate: $119/night, must book by July 26',
    'Complimentary WiFi, breakfast, and parking',
    'Outdoor pool',
    'Fitness center',
    'Room service',
    'Red Eye Restaurant and Bar',
    'Close to Galleria shopping and dining',
  ];
  const photoDeets = [
    {alt: 'Hotel exterior', file: hotelImageExterior},
    {alt: 'Hotel lobby', file: hotelImageLobby},
    {alt: 'Hotel interior', file: hotelImageInterior},
    {alt: 'Restaurant/bar', file: hotelImageBar1},
    {alt: 'Restaurant/bar', file: hotelImageBar2},
    {alt: 'Restaurant/bar', file: hotelImageDining},
    {alt: 'Guest room', file: hotelImageRoom1},
    {alt: 'Guest room', file: hotelImageRoom2},
    {alt: 'Guest room', file: hotelImageRoom3},
    {alt: 'Guest room', file: hotelImageRoom4},
    {alt: 'Fitness center', file: hotelImageFitness},
  ];


  return (
    <section className={`${styles.Hotel}`}>
      <h3 className={`section-heading`}>
        Host Hotel
      </h3>

      <div className="d-flex flex-column flex-nowrap">
        <Row className="justify-content-center">
          <Col xs={6} sm={5} md={4}>
            <p>
              <a href={hotelUrl} className={styles.Logo}>
                <Image className="img-fluid"
                       src={hotelLogo}
                       alt={hotelName + ' Logo'}/>
              </a>
            </p>
          </Col>
        </Row>
        <Row className="order-2 order-md-3">
          <Col xs={12}>
            <p className={styles.Lead + " lead"}>
              The{' '}
              <a href={hotelUrl}>{hotelName}</a>
              {' '}is proud to host the Big D Classic, with special rates for tournament bowlers.
            </p>
          </Col>
          <Col xs={12} sm={7}>
            <ul>
              {features.map((f, i) => {
                return <li key={i}>{f}</li>
              })}
            </ul>
          </Col>
          <Col xs={12} sm={5}>
            <address>
              <span className="d-block">4801 Lyndon B. Johnson Freeway</span>
              <span className="d-block">Dallas, TX 75244</span>
              <span className="d-block">United States</span>
              <span className="d-block">
                  <span className={'bi-telephone-fill pe-2'} aria-hidden={true}/>
                  <span className={'visually-hidden'}>
                    Telephone number
                  </span>
                  <a href="tel:972-661-3600">972-661-3600</a>
                </span>
            </address>
            <p className="d-sm-none">
              <a href="https://goo.gl/maps/xmqGYjxRYVR2">
                Map to Hotel
              </a>
            </p>
          </Col>
          <Col>
            <p className={'lead text-center'}>
              2024 details TBA
            </p>
          </Col>
          {/*<Col>*/}
          {/*  <p className="text-center">*/}
          {/*    <Button href={hotelUrl} variant="success">*/}
          {/*      Book Your Room*/}
          {/*    </Button>*/}
          {/*  </p>*/}
          {/*</Col>*/}
        </Row>
        <Row className="order-3 order-md-2">
          <Col>
            <Carousel fade>
              {photoDeets.map((photo, i) => {
                return (
                  <Carousel.Item key={i}>
                    <Image src={photo.file}
                           alt={photo.alt}
                           className="d-block w-100 img-fluid"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
        <Row className="order-4 d-none d-sm-block">
          <Col>
            <div className={`${styles.Map} ratio ratio-21x9`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13395.62514644726!2d-96.82778208228135!3d32.92707411940713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c20d006f3e19d%3A0x7c4b3eebb994d659!2sSheraton+Dallas+Hotel+by+the+Galleria!5e0!3m2!1sen!2sus!4v1549220341404"/>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Hotel;
