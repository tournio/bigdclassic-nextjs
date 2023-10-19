import React from "react";
import Card from "react-bootstrap/Card";

import StripeBuyButton from "./StripeBuyButton";

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
  //     Registration is now closed. We can't wait to see everyone at the tournament!
  //   </Card.Text>
  // );

  const text = (
    <Card.Body>
      {/*<Card.Subtitle className={'mb-2'} as={'h5'}>*/}
      {/*  It's tournament weekend!*/}
      {/*</Card.Subtitle>*/}
      {/*<Card.Text>*/}
      {/*  Welcome to Dallas! We wish everyone good luck, high scores, and cool drinks!*/}
      {/*</Card.Text>*/}

      {/*<hr/>*/}

      {/*<Card.Subtitle className={'mb-2'} as={'h5'}>*/}
      {/*  That's a wrap!*/}
      {/*</Card.Subtitle>*/}
      {/*<Card.Text>*/}
      {/*  Thank you to everyone who joined us for the tournament! We hope you had a lot of fun, we sure did! We look*/}
      {/*  forward to seeing everyone again next year.*/}
      {/*</Card.Text>*/}

      <Card.Text>
        We&apos;re hosting a Match Play Trios tournament, on December 16, 2023. Reserve your team&apos;s spot
        today!
      </Card.Text>
      <Card.Text>
        <a href="/images/match_play_dec_2023.pdf">
          Full details
        </a>
      </Card.Text>
      <Card.Text>
        <StripeBuyButton buttonId={process.env.NEXT_PUBLIC_TRIOS_BUTTON_ID}/>
      </Card.Text>


      {/*<hr/>*/}

      {/*<Card.Text>*/}
      {/*  /!*We&apos;ll post results here as soon as they're available.*!/*/}
      {/*  <a href='/results'>*/}
      {/*    2023 Tournament Results*/}
      {/*  </a>*/}
      {/*</Card.Text>*/}

      {/*<Card.Text>*/}
      {/*  Registration is sold out! Thank you to everyone who signed up so quickly! You can still*/}
      {/*  use it to pay your fees, though.*/}
      {/*</Card.Text>*/}
      {/*<Card.Text className={'text-center'}>*/}
      {/*  <a href="https://www.tourn.io/tournaments/big-d-2023"*/}
      {/*     className="btn btn-success">*/}
      {/*    Pay Fees*/}
      {/*    {' '}<i className="bi bi-arrow-right" aria-hidden={true}/>*/}
      {/*  </a>*/}
      {/*</Card.Text>*/}

      {/*<Card.Text>*/}
      {/*  Registration is open and spots are filling up fast! The deadline is August 2, so what are you waiting for?*/}
      {/*</Card.Text>*/}
      {/*<Card.Text className={'text-center'}>*/}
      {/*  <a href="https://www.tourn.io/tournaments/big-d-2023"*/}
      {/*     className="btn btn-primary">*/}
      {/*    Register Online*/}
      {/*    {' '}<i className="bi bi-arrow-right" aria-hidden={true} />*/}
      {/*  </a>*/}
      {/*</Card.Text>*/}

      {/*<hr/>*/}

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
