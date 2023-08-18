import React from 'react';

import Layout from "../components/layout";

import styles from './results.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const results = () => {
  const available = [
    { id: 'team', name: 'Team Event' },
    { id: 'doubles', name: 'Doubles Event' },
    { id: 'singles', name: 'Singles Event' },
    { id: 'all_events', name: 'All Events' },
    { id: 'optional_scratch', name: 'Optional Scratch' },
    { id: 'prize_list', name: 'Prize List' },
  ];

  return (
    <Layout>
      <div className={styles.Results}>
        <h1 className="display-4">
          Tournament Results
        </h1>

        <h5 className="text-muted">
          Payouts list will be posted as soon as it&apos;s finalized!
        </h5>

        <h5>
          2023 Tournament Results
        </h5>

        <Row className={'mb-3'}>
          <Col lg={6}>
            <Card className='mb-2'>
              <ListGroup variant='flush'>
                { available.map((result, i) => {
                  return (
                    <ListGroup.Item key={i}>
                      <Button variant='outline-secondary' href={`/results/2023/${result.id}.pdf`} title='Download PDF'>
                        <i className="bi bi-file-pdf-fill" aria-hidden={true}></i>
                      </Button>
                      {' '}
                      <a href={`/results/2023/${result.id}.pdf`} className={styles.TextLink}>
                        {`${result.name}`}
                      </a>
                    </ListGroup.Item>
                  );
                }) }
              </ListGroup>
            </Card>
          </Col>
        </Row>

      </div>
    </Layout>
  );
};

export default results;
