import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import FormGroup from "react-bootstrap/FormGroup";

import styles from './spotlight.module.scss';

const spotlight = () => {
  const registrationUrl = "https://www.igbo-reg.com/tournaments/big-d-classic-2021";
  // const text = (
  //   <Card.Text>
  //     We're working hard putting together this year's tournament, in a way that will be both fun and safe for everyone. Keep your eyes peeled!
  //   </Card.Text>
  // );

  // const text = (
  //   <Card.Text>
  //     <p>
  //       Registration is now open! The deadline is August 4, so what are you waiting for?
  //     </p>
  //     <a href="https://www.igbo-reg.com/tournaments/big-d-classic-2021"
  //        className="btn btn-primary">
  //       Register Online
  //       {' '}<svg xmlns="http://www.w3.org/2000/svg"
  //            width="16"
  //            height="16"
  //            fill="currentColor"
  //            className="bi bi-arrow-right aria-hidden"
  //            viewBox="0 0 16 16">
  //         <path fill-rule="evenodd"
  //               d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  //       </svg>
  //     </a>
  //   </Card.Text>
  // )

  // const text = (
  //   <Card.Text>
  //     Registration is now closed. We can't wait to see everyone at the tournament!
  //   </Card.Text>
  // );

  // const text = (
  //   <Card.Text>
  //     <p>
  //       Thank you to everyone who joined us for the tournament! We hope you had a lot of fun, we sure did! We look forward to seeing everyone again next year.
  //     </p>
  //     <p>
  //       <a href='/results'>
  //         Results
  //       </a>
  //     </p>
  //   </Card.Text>
  // );

  const text = (
    <Card.Text>
      <p>
        We're hosting a match play trio tournament on December 18, at Plano Super Bowl. Join us, won't you?
      </p>
      <p>
        <a href="/images/december_match_play_flyer.jpg">
          Full details
        </a>
      </p>
      <h5>
        Reserve your team's spot now for $90.
      </h5>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick"/>
        <input type="hidden" name="hosted_button_id" value="QLQMTBUM7KW7J"/>
        <input type="hidden" name="on0" value="Who else is on your team?"/>
        <FormGroup className="mb-2">
          <label for='os0'>
            Who else is on your team?
          </label>
          <input type="text" id='os0' name="os0" maxlength="200" className="form-control" />
        </FormGroup>
        <p className="text-center m-0 p-0">
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit"
                 alt="PayPal - The safer, easier way to pay online!"/>
        </p>
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
      </form>
    </Card.Text>
  );

  return (
    <Col xs={12} md={4}>
      <Card>
        <Card.Header bg="light">
          <Card.Title className={styles.Title}>
            Spotlight
          </Card.Title>
        </Card.Header>
        <Card.Body>
          {text}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default spotlight;
