import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const spotlight = () => {
  return (
    <Col xs={12} md={4}>
      <Card>
        <Card.Header bg="light">
          <Card.Title>
            <h4>
              Spotlight
            </h4>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            We're working hard putting together this year's tournament, in a way that will be both fun and safe for
            everyone. Keep your eyes peeled!
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default spotlight;

// //   .col-12.col-md-4
// //     .card.mb-2
// //       .card-header.bg-light
// //         %h4.card-title.mb-0
// //           Spotlight
// //       .card-body.pb-4
// //         {% include 'spotlight.html.twig' %}
