import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styles from './Links.module.scss';

const Links = () => {
  const interest = [
    {
      short: 'IGBO',
      long: 'International Gay Bowling Association',
      url: 'http://www.igbo.org',
    },
    {
      short: 'USBC',
      long: 'United States Bowling Congress',
      url: 'https://www.bowl.com',
    },
    {
      short: 'TAD',
      long: 'Find an IGBO tournament average',
      url: 'http://tad.igbo.org',
    },
  ];
  const interestText = interest.map((info, i) => {
    return (
      <Col xs={6} md={4} key={i}>
        <Card className={styles.InfoCard}>
          <Card.Header className={styles.CardHeader}>
            <a href={info.url}>
              {info.short}
            </a>
          </Card.Header>
          <Card.Body className={styles.CardBody}>
            <a href={info.url}>
              {info.long}
            </a>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  const tournaments = [
    {
      headline:  'IGBO',
      long: 'IGBO Annual 2026',
      url: 'https://igbo2026.org/',
      location: 'Denver, CO',
    },
    {
      headline:  'TROT',
      long: 'Texas Roll-off Tournament',
      url: 'http://trotbowling.com/',
      location: 'Grand Prairie, TX',
    },
    {
      headline:  'SHIFTID',
      long: 'Seniors Handicap Invitational Family Tournament in DFW',
      url: 'http://shiftid.org',
      location: 'Garland, TX',
    },
    {
      headline:  'HIT',
      long: 'Houston Invitational Tournament',
      url: 'http://www.bowlhit.com/',
      location: 'Houston, TX',
    },
    {
      headline:  'ACT',
      long: 'Alamo City Tournament',
      url: 'http://actbowl.org/',
      location: 'San Antonio, TX',
    },
    {
      headline:  'AUS',
      long: 'Texas Super Slam',
      url: 'http://www.txsuperslam.com',
      location: 'Austin, TX',
    },
    {
      headline:  'OKC',
      long: 'OKClassic',
      url: 'http://www.okclassic.com',
      location: 'Oklahoma City, OK',
    },
    {
      headline:  'DIGLIT',
      long: 'Denver International Gay and Lesbian Invitational',
      url: 'http://www.bowldiglit.org/',
      location: 'Denver, CO',
    },
    {
      headline:  'SMC',
      long: 'Show Me Classic',
      url: 'http://showmeclassic.com',
      location: 'St. Louis, MO',
    },
    {
      headline:  'MAKIT',
      long: 'Missouri and Kansas Invitational',
      url: 'http://www.makitkc.org',
      location: 'Kansas City, KS',
    },
    {
      headline:  'SF',
      long: 'San Francisco Golden Gate Classic',
      url: 'http://www.goldengateclassic.org/',
      location: 'San Francisco, CA',
    },
    {
      headline:  'PSDIC',
      long: 'Palm Springs Desert Invitational Classic',
      url: 'http://psdic.org',
      location: 'Palm Springs, CA',
    },
  ];
  const tournamentsText = tournaments.map((t, i) => {
    return (
      <Col xs={6} sm={4} key={i}>
        <Card className={styles.TournamentCard}>
          <Card.Header className={styles.CardHeader}>
            <a href={t.url}>
              {t.headline}
            </a>
          </Card.Header>
          <Card.Body className={styles.CardBody}>
            <a href={t.url}>
              {t.long}
            </a>
            <span className={styles.Location}>
              {t.location}
            </span>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <section className={`${styles.Links}`}>
      <h3 className={`section-heading`}>
        Links of Interest
      </h3>

      <Row className={`${styles.InfoRow}`}>
        {interestText}
      </Row>

      <hr />

      <h3 className={`section-heading`}>
        Other IGBO Tournaments
      </h3>

      <Row>
        {tournamentsText}
      </Row>

    </section>
  );
}

export default Links;
