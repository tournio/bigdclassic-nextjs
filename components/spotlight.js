import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import FormGroup from "react-bootstrap/FormGroup";

import styles from './spotlight.module.scss';

const spotlight = () => {
  const registrationUrl = "https://www.igbo-reg.com/tournaments/big-d-classic-2022";
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
  //       {' '}<i className="bi bi-arrow-right" aria-hidden={true} />
  //     </a>
  //   </Card.Text>
  // )

  // const text = (
  //   <Card.Text>
  //     Registration is now closed. We can't wait to see everyone at the tournament!
  //   </Card.Text>
  // );

  const text = (
    <Card.Body>
      {/*<Card.Subtitle className={'mb-2'} as={'h5'}>*/}
      {/*  That's a wrap!*/}
      {/*</Card.Subtitle>*/}
      {/*<Card.Text>*/}
      {/*  <p>*/}
      {/*    Thank you to everyone who joined us for the tournament! We hope you had a lot of fun, we sure did! We look forward to seeing everyone again next year.*/}
      {/*  </p>*/}
      {/*  <p className={'mb-0'}>*/}
      {/*    /!*We&apos;ll post results here as soon as they're available.*!/*/}
      {/*    <a href='/results'>*/}
      {/*      Results*/}
      {/*    </a>*/}
      {/*  </p>*/}
      {/*</Card.Text>*/}

      {/*<Card.Text>*/}
      {/*  Registration is sold out! Thank you to everyone who signed up so quickly! You can still*/}
      {/*  use it to pay your fees, though.*/}
      {/*</Card.Text>*/}
      {/*<Card.Text className={'text-center'}>*/}
      {/*  <a href="https://www.igbo-reg.com/tournaments/big-d-classic-2022"*/}
      {/*     className="btn btn-primary">*/}
      {/*    Online Registration*/}
      {/*    {' '}<i className="bi bi-arrow-right" aria-hidden={true}/>*/}
      {/*  </a>*/}
      {/*</Card.Text>*/}

      {/*<Card.Text>*/}
      {/*  Registration is now open! The deadline is August 3, so what are you waiting for?*/}
      {/*</Card.Text>*/}
      {/*<Card.Text className={'text-center'}>*/}
      {/*  <a href="https://www.igbo-reg.com/tournaments/big-d-classic-2022"*/}
      {/*     className="btn btn-primary">*/}
      {/*    Register Online*/}
      {/*    {' '}<i className="bi bi-arrow-right" aria-hidden={true} />*/}
      {/*  </a>*/}
      {/*</Card.Text>*/}
      {/*<hr />*/}
      <Card.Text>
          We're hosting a match play trio tournament on December 3, at Plano Super Bowl. Join us, won't you?
      </Card.Text>
      <Card.Text>
        <a href="/images/match_play_flyer_dec_2022.jpg">
          Full details
        </a>
      </Card.Text>
      <Card.Subtitle>
        <h5>
          Reserve your team's spot now for $90.
        </h5>
      </Card.Subtitle>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick"/>
        <input type="hidden" name="hosted_button_id" value="QLQMTBUM7KW7J"/>
        <input type="hidden" name="on0" value="Who else is on your team?"/>
        <FormGroup className="mb-2">
          <label htmlFor='os0'>
            Who else is on your team?
          </label>
          <input type="text" id='os0' name="os0" maxLength="200" className="form-control" />
        </FormGroup>
        <p className="text-center m-0 p-0">
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit"
                 alt="PayPal - The safer, easier way to pay online!"/>
        </p>
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
      </form>

    </Card.Body>
  );

  return (
    <Card>
      <Card.Header bg="light">
        <Card.Title className={styles.Title}>
          Spotlight
        </Card.Title>
      </Card.Header>
      {text}
    </Card>
  );
};

export default spotlight;
