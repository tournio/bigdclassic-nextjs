import {Jumbotron, Row, Card, Col} from 'react-bootstrap'

import Layout from '../components/layout';
import Spotlight from '../components/spotlight';

import styles from './index.module.scss';

const index = () => {
  const tournamentDates = 'August 13-15, 2021';

  const jumbotronClasses = ['d-flex', 'flex-column-reverse', 'align-items-end'];
  jumbotronClasses.push(styles.JumbotronImage);

  return (
    <Layout home={true}>

      <Jumbotron className={jumbotronClasses.join(' ')}>
        <h1 className="display-1">
          <span className={styles.Title}>
            Big D Classic
          </span>
          <span className={styles.Year}>
            2021
          </span>
        </h1>
      </Jumbotron>
      <Row>
        <p className={styles.PhotoCredit + " col-12"}>
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
                {/*<h4>*/}
                  {tournamentDates}
                {/*</h4>*/}
              </Card.Title>
              <Card.Subtitle className="text-muted">
                Plano, TX
              </Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <div className="d-lg-none">
                <img className="float-right img-fluid col-6 p-0"
                  src="/images/logo.jpg"
                  alt="Big D Classic logo"
                />
              </div>
              <Card.Text>
                In a tradition dating back very nearly to the 20th century, bowlers from all around the country descend
                upon Dallas, Texas in the middle of August to beat the heat and engage in a little friendly competition,
                all while raising money for a good cause.
              </Card.Text>
              <Card.Text>
                Can you believe we've already put on sixteen tournaments? Before we know it, we'll be asking our parents
                for the keys to the car and a later curfew.
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
