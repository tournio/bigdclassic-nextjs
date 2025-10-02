import React from "react";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import {REGISTER_URL, HOTEL_URL} from "../../utils/misc";

import styles from './Spotlight.module.scss';

const Spotlight = () => {
  const text = (
    <>
      {/*<Card.Text>*/}
      {/*  While we prepare for the 2025 Big D Classic, check out the other IGBO tournaments in the D/FW metroplex:*/}
      {/*</Card.Text>*/}
      {/*<ul>*/}
      {/*  <li>*/}
      {/*    <a href={'https://trotbowling.com/'}>*/}
      {/*      TROT*/}
      {/*    </a>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <a href={'https://www.shiftid.org/'}>*/}
      {/*      SHIFTID*/}
      {/*    </a>*/}
      {/*  </li>*/}
      {/*</ul>*/}

      {/*<Card.Text>*/}
      {/*  Registration will be opening soon, keep your eyes peeled!*/}
      {/*</Card.Text>*/}

      {/*<Card.Text as={'h5'}>*/}
      {/*  Registration is now open!*/}
      {/*</Card.Text>*/}
      {/*<Card.Text>*/}
      {/*  Be sure to get your team&apos;s registration submitted and paid in order to guarantee your spot.*/}
      {/*</Card.Text>*/}
      {/*<Card.Text className={`text-center mb-3`}>*/}
      {/*  <a href={REGISTER_URL}*/}
      {/*     className={`btn btn-primary`}*/}
      {/*  >*/}
      {/*    Register Now*/}
      {/*  </a>*/}
      {/*</Card.Text>*/}

      {/*<Card.Text as={'h5'}>*/}
      {/*  Shift Added!*/}
      {/*</Card.Text>*/}
      {/*<Card.Text>*/}
      {/*  Due to overwhelming demand, we&apos;ve just added a second shift (B) to our tournament! If you haven&apos;t registered yet, now is your chance to get a spot for your team.*/}
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

      {/*<Card.Text>*/}
      {/*  Registration is sold out! Thank you to everyone who signed up so quickly! You can still*/}
      {/*  use it to pay your fees, though.*/}
      {/*</Card.Text>*/}
      {/*<Card.Text className={'text-center mb-3'}>*/}
      {/*  <a href={REGISTER_URL}*/}
      {/*     className="btn btn-success">*/}
      {/*    Pay Fees*/}
      {/*    {' '}<i className="bi bi-arrow-right" aria-hidden={true}/>*/}
      {/*  </a>*/}
      {/*</Card.Text>*/}
      {/*<hr />*/}
      {/*<Card.Text className={'text-center mb-3'}>*/}
      {/*  <a href={HOTEL_URL}*/}
      {/*     className="btn btn-primary">*/}
      {/*    Book Your Hotel Room*/}
      {/*    {' '}<i className="bi bi-arrow-right" aria-hidden={true} />*/}
      {/*  </a>*/}
      {/*</Card.Text>*/}

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

      {/*<Card.Text className={'mb-3'}>*/}
      {/*  Results will be posted here as soon as they are available.*/}
      {/*</Card.Text>*/}

      {/*<Card.Text className={'mb-3'}>*/}
      {/*    <a href='/results'>*/}
      {/*      2025 Results*/}
      {/*    </a>*/}
      {/*</Card.Text>*/}

      {/*<hr/>*/}

      <Card.Text className={'mb-3'}>
        Our next Match Play Trios fundraising event takes place December 6.
      </Card.Text>

      <Card.Text className={'mb-3'}>
        <Link href={'/trios-rules'}>
          Details
        </Link>
      </Card.Text>

      <Card.Text className={'text-center mb-3'}>
        <a href={REGISTER_URL}
           className="btn btn-primary btn-sm">
          Register Your Team
          <i className="bi bi-arrow-right ps-2" aria-hidden={true} />
        </a>
      </Card.Text>

      {/*<Card.Text>*/}
      {/*  /!*We&apos;ll post results here as soon as they're available.*!/*/}
      {/*  <a href='/results'>*/}
      {/*    2025 Tournament Results*/}
      {/*  </a>*/}
      {/*</Card.Text>*/}
    </>
  );

  return (
    <div className={`${styles.Spotlight}`}>
      <Card className={styles.Card}>
        <Card.Header>
          <Card.Title as={'h4'} className={`${styles.Title}`}>
            Spotlight
          </Card.Title>
        </Card.Header>

        <Card.Body className={styles.Body}>
          {text}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Spotlight;
