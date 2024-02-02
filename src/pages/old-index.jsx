import {Row, Card, Col} from 'react-bootstrap'

import Layout from '../components/layout';
import Spotlight from '../components/spotlight';

import styles from './index.module.scss';
import Front from "../components/front";

const oldIndex = () => {

  return (
    <Layout home={true}>

      <div className={`${styles.JumbotronImage} d-flex flex-column-reverse align-items-end`} />

      <Row>
        <p className={`${styles.PhotoCredit} col-12`}>
          Photo credit:{' '}
          <a href="https://www.flickr.com/photos/daxis/18378516600">
            Daxis
          </a>
        </p>
      </Row>

      <Row>
        <Col xs={12} md={8} className={'mb-3'}>
          <Front />
        </Col>

        {/*<Col lg={4} className="d-none d-lg-block">*/}
        {/*  <img className="img-fluid"*/}
        {/*       src="/images/logo.jpg"*/}
        {/*       alt="Big D Classic logo"*/}
        {/*  />*/}
        {/*</Col>*/}

        <Col xs={12} md={4}>
          <Spotlight />
        </Col>
      </Row>

    </Layout>
  )
}

export default oldIndex;
