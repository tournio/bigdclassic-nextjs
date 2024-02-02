import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from '../components/layout';

import styles from './center.module.scss';

const center = () => {
  const centerUrl = 'https://planosuperbowl.com';
  const centerName = 'Plano Super Bowl';
  const features = [
    '48 synthetic lanes',
    'Pro shop',
    'Open 24 hours a day!',
    'VIP Lounge and Party Room',
    'Smoke-free',
    'Video game arcade',
    'Scratch Drafthouse with 24 beers on tap and made-from-scratch kitchen',
    'VIP lanes (private 7-lane bowling room)',
    'Weekday happy hours',
    'Birthday parties',
  ];

  return (
    <Layout>
      <div className={styles.Center}>
        <h1 className="display-4">
          {centerName}
        </h1>

        <Row>
          <Col xs={12} sm={5}>
            <p className="lead">
              The Big D Classic takes place at{' '}
              <a href={centerUrl}>
                {centerName}
              </a>
              . You can look forward to enjoying all this:
            </p>
            <ul>
              {features.map((f, i) => {
                return (
                  <li key={i}>
                    {f}
                  </li>
                )
              })}
            </ul>
          </Col>
          <Col xs={12} sm={7}>
            <h4 className="d-none d-md-block">
              Getting There
            </h4>

            <div className={`${styles.Map} ratio ratio-4x3 d-none d-md-block`}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.8574150688673!2d-96.7025117841221!3d33.03388677814927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19075ddf849b%3A0x607103a9ca4d7441!2sPlano%20Super%20Bowl!5e0!3m2!1sen!2sus!4v1650145347591!5m2!1sen!2sus" />
            </div>

            <address>
              <span className="line">
                <strong>
                  Plano Super Bowl
                </strong>
              </span>
              <span className="line">
                2521 K Avenue
              </span>
              <span className="line">
                Plano, TX 75074
              </span>
              <span className="line">
                Tel:{' '}
                <a href="tel:972-881-0242">972-881-0242</a>
              </span>
            </address>
            <p className="d-md-none">
              <a href="https://g.page/psbfanpage?share">
                View Map
              </a>
            </p>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default center;
