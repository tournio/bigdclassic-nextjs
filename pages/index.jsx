import {Row, Card, Col} from 'react-bootstrap'

import Layout from '../components/layout';
import Spotlight from '../components/spotlight';

import styles from './index.module.scss';

const index = () => {
  const tournamentDates = 'August 12-14, 2022';

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
        <Col xs={12} md={8} lg={4}>
          <Card>
            <Card.Header>
              <Card.Title>
                {tournamentDates}
              </Card.Title>
              <Card.Subtitle className="text-muted">
                Plano, TX
              </Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <div className="d-lg-none">
                <img className="float-end img-fluid col-6 p-0"
                  src="/images/logo.jpg"
                  alt="Big D Classic logo"
                />
              </div>
              <Card.Text>
                In a tradition dating back very nearly to the 20th century, bowlers from all around the country descend
                upon north Texas in the middle of August to beat the heat and engage in a little friendly competition,
                all while raising money for a good cause.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} className="d-none d-lg-block">
          <img className="img-fluid"
               src="/images/logo.jpg"
               alt="Big D Classic logo"
          />
        </Col>

        <Spotlight />
      </Row>

    </Layout>
  )
}

export default index;
