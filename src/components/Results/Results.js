import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import React from "react";
import {Button, ListGroup} from "react-bootstrap";

import styles from './Results.module.scss';

const Results = () => {
  const available = [
    [
      { id: 'team', name: 'Team Event' },
      { id: 'doubles', name: 'Doubles Event' },
      { id: 'singles', name: 'Singles Event' },
      { id: 'all_events', name: 'All Events' },
      { id: 'optional_scratch', name: 'Optional Scratch' },
      { id: 'big_eliminator_handicap', name: 'BIG Eliminator - Handicap' },
      { id: 'big_eliminator_scratch', name: 'BIG Eliminator - Scratch' },
    ],
    // [
    //   { id: 'optional_scratch_a', name: 'Optional Scratch - Div A' },
    //   { id: 'optional_scratch_b', name: 'Optional Scratch - Div B' },
    //   { id: 'optional_scratch_c', name: 'Optional Scratch - Div C' },
    //   { id: 'optional_scratch_d', name: 'Optional Scratch - Div D' },
    //   { id: 'optional_scratch_e', name: 'Optional Scratch - Div E' },
    // ],
  ];

  return (
    <section className={`${styles.Results}`}>
      <h3 className={`section-heading`}>
        2024 Tournament Results
      </h3>

      <Row className={'px-2 px-xl-0'}>
        {available.map((resultSet, i) => (
          <Col lg={6} key={i}>
            <Card className={`${styles.ResultsCard} mb-2`}>
              <ListGroup variant='flush' className={`${styles.ResultList}`}>
                { resultSet.map((result, j) => {
                  return (
                    <ListGroup.Item key={j} className={`${styles.ResultItem} d-flex justify-content-between`}>
                      <a href={`/results/2024/${result.id}.pdf`}
                         className={`${styles.ResultLink} mt-2`}>
                        {`${result.name}`}
                      </a>
                      <Button variant='outline-secondary'
                              href={`/results/2024/${result.id}.pdf`}
                              title='Download PDF'>
                        <i className="bi-download" aria-hidden={true}></i>
                      </Button>
                    </ListGroup.Item>
                  );
                }) }
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Results;
