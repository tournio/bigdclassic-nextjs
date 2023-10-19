import React from 'react';

import Layout from "../components/layout";

import styles from './links.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const links = () => {
  const leagues = [
    {
      short: 'OLBA',
      long: 'Oak Lawn Bowling Association',
      url: 'https://www.facebook.com/oaklawnbowlingassociation',
    },
    {
      short: 'MBA',
      long: 'Metroplex Bowling Association',
      url: 'https://www.facebook.com/MetroplexBowling/',
    },
    {
      short: 'MRB',
      long: 'Metroplex Rainbow Bowling',
      url: 'https://www.facebook.com/pages/category/Bowling-Alley/Metroplex-Rainbow-Bowling-184099024995/',
    },
    {
      short: 'SC',
      long: 'Sunset Combo',
      url: 'https://www.leaguesecretary.com/bowling-centers/cityview-lanes-fort-worth-texas/bowling-leagues/sunset-combo-2018-19/dashboard/5490',
    },
  ];
  const leaguesText = leagues.map((league, i) => {
    return (
      <Col xs={6} key={i} className={styles.LeagueCard}>
        <Card>
          <Card.Header className={styles.CardHeader}>
            <a href={league.url}>
              {league.short}
            </a>
          </Card.Header>
          <Card.Body className={styles.CardBody}>
            <a href={league.url}>
              {league.long}
            </a>
          </Card.Body>
        </Card>
      </Col>
    );
    });

  const tournaments = [
    {
      headline:  'IGBO',
      long: 'IGBO Annual 2024',
      url: 'https://igbo2024.org/',
      location: 'Reno, NV',
    },
    // {
    //   headline:  'DC',
    //   long: 'IGBO Mid-year 2022',
    //   url: 'http://igbomy2022.org/',
    //   location: 'Washington, DC',
    // },
    {
      headline:  'TROT',
      long: 'Texas Roll-Off Tournament',
      url: 'http://trotbowling.com/',
      location: 'Grand Prairie, TX',
    },
    {
      headline:  'HIT',
      long: 'Houston Invitational Tournament',
      url: 'http://www.houstoninvite.com',
      location: 'Houston, TX',
    },
    {
      headline:  'ACT',
      long: 'Alamo City Tournament',
      url: 'http://www.actbowl.org',
      location: 'San Antonio, TX',
    },
    {
      headline:  'OKC',
      long: 'OKClassic',
      url: 'http://www.okclassic.com',
      location: 'Oklahoma City, OK',
    },
    // {
    //   headline:  'OK',
    //   long: 'JOLT',
    //   url: 'http://www.jolttulsa.com/',
    //   location: 'Tulsa, OK',
    // },
    {
      headline:  'SMC',
      long: 'Show Me Classic',
      url: 'http://showmeclassic.com',
      location: 'St. Louis, MO',
    },
    {
      headline:  'MAKIT',
      long: 'MAKIT-KC',
      url: 'http://www.makitkc.org',
      location: 'Kansas City, KS',
    },
    {
      headline:  'CA',
      long: 'Golden Gate Classic',
      url: 'http://www.goldengateclassic.org',
      location: 'San Francisco, CA',
    },
    {
      headline:  'PSDIC',
      long: 'Palm Springs Desert Invitational Classic',
      url: 'http://psdic.org',
      location: 'Palm Springs, CA',
    },
    {
      headline:  'DIGLIT',
      long: 'DIGLIT',
      url: 'http://www.bowldiglit.org/',
      location: 'Denver, CO',
    },
  ];
  const tournamentsText = tournaments.map((t, i) => {
    return (
      <Col xs={6} sm={4} key={i} className={styles.TournamentCard}>
        <Card>
          <Card.Header className={styles.CardHeader}>
            <a href={t.url}>
              {t.headline}
            </a>
          </Card.Header>
          <Card.Body className={styles.CardBody}>
            <a href={t.url}>
              {t.long}
            </a>
            <small className="line text-muted">
              {t.location}
            </small>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <Layout>
      <div className={styles.Links}>
        <h1 className="display-4">
          Links of Interest
        </h1>
        <h3>
          Local IGBO Leagues
        </h3>

        <Row className={styles.LeaguesRow}>
          {leaguesText}
        </Row>

        <hr />

        <h3>
          Other IGBO Tournaments
        </h3>

        <Row>
          {tournamentsText}
        </Row>

      </div>
    </Layout>
  );
};

export default links;
