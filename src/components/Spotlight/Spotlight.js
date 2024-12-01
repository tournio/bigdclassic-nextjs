import React from "react";
import Card from "react-bootstrap/Card";
import Link from "next/link";

import styles from './Spotlight.module.scss';

const Spotlight = () => {
  // const registrationOpen = (
  //   <>
  //     <Card.Text as={'h5'}>
  //       Shift Added!
  //     </Card.Text>
  //     <Card.Text>
  //       Due to overwhelming demand, we&apos;ve just added a second shift (B) to our tournament! If you haven&apos;t registered yet, now is your chance to get a spot for your team.
  //     </Card.Text>
  //     <Card.Text className={`text-center mb-3`}>
  //       <a href={REGISTER_URL}
  //          className={`btn btn-primary`}
  //       >
  //         Register Online
  //       </a>
  //     </Card.Text>
  //   </>
  // );

  const text = (
    <>
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
      {/*    <a href='/results'>*/}
      {/*      2024 Results*/}
      {/*    </a>*/}
      {/*</Card.Text>*/}

      {/*<hr/>*/}

      {/*<Card.Text className={'mb-3'}>*/}
      {/*  Our next Match Play Trios fundraising event takes place November 23.*/}
      {/*</Card.Text>*/}

      {/*<Card.Text className={'mb-3'}>*/}
      {/*  <Link href={'/trios-rules'}>*/}
      {/*    Get the details.*/}
      {/*  </Link>*/}
      {/*</Card.Text>*/}

      {/*<Card.Text className={'text-center mb-3'}>*/}
      {/*  <a href={REGISTER_URL}*/}
      {/*     className="btn btn-primary">*/}
      {/*    Register Online*/}
      {/*    <i className="bi bi-arrow-right ps-2" aria-hidden={true} />*/}
      {/*  </a>*/}
      {/*</Card.Text>*/}

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

      {/*<Card.Text>*/}
      {/*  We&apos;re hosting a Match Play Trios tournament, on May 4, 2024. Reserve your team&apos;s spot*/}
      {/*  today!*/}
      {/*</Card.Text>*/}
      {/*<Card.Text>*/}
      {/*  <Link href="/images/match_play_may_2024.jpg"*/}
      {/*        className={'d-block'}>*/}
      {/*    Full details*/}
      {/*  </Link>*/}
      {/*</Card.Text>*/}
      {/*<StripeBuyButton buttonId={process.env.NEXT_PUBLIC_TRIOS_BUTTON_ID}/>*/}

      {/*<hr/>*/}

      <Card.Text>
        While we prepare for the 2025 Big D Classic, check out the other IGBO tournaments in the D/FW metroplex:
      </Card.Text>
      <ul>
        <li>
          <a href={'https://trotbowling.com/'}>
            TROT
          </a>
        </li>
        <li>
          <a href={'https://www.shiftid.org/'}>
            SHIFTID
          </a>
        </li>
        {/*<li>*/}
        {/*  <a href={'https://www.damitbowling.org/'}>*/}
        {/*    DAMIT*/}
        {/*  </a>*/}
        {/*</li>*/}
      </ul>

      {/*<Card.Text>*/}
      {/*  Registration will be opening soon, keep your eyes peeled!*/}
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

        {/*<Card.Body className={styles.Body}>*/}
          {/*{registrationOpen}*/}
        {/*</Card.Body>*/}
      </Card>
    </div>
  );
}

export default Spotlight;
