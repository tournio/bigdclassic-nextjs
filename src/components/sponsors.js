import React from 'react';

import styles from './sponsors.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

import igbo from '../public/images/sponsors/igbo.png';
import storm from '../public/images/sponsors/storm_logo.jpg';
import olba from '../public/images/sponsors/olba.gif';
import usbc from '../public/images/sponsors/usbc.jpg';
import woodys from '../public/images/sponsors/woodys.jpg';

const sponsors = ({home}) => {
  const sponsorDetails = [
    {
      alt: 'The International Gay Bowling Organization',
      href: 'http://www.igbo.org/',
      title: 'The International Gay Bowling Organization',
      src: 'igbo.png',
      file: igbo,
    },
    {
      alt: 'Storm Bowling Products',
      href: 'http://www.stormbowling.com/',
      title: 'Storm Bowling Products',
      src: 'storm_logo.jpg',
      file: storm,
    },
    {
      alt: 'The Oak Lawn Bowling Association',
      href: 'https://www.facebook.com/oaklawnbowlingassociation',
      title: 'The Oak Lawn Bowling Association',
      src: 'olba.gif',
      file: olba,
    },
    {
      alt: 'The United States Bowling Congress',
      href: 'http://www.bowl.com/',
      title: 'The United States Bowling Congress',
      src: 'usbc.jpg',
      file: usbc,
    },
    {
      alt: "Woody's Dallas",
      href: 'http://dallaswoodys.com/',
      title: "Woody's Dallas",
      src: 'woodys.jpg',
      file: woodys,
    },
  ];

  let sponsorText = '';
  if (home) {
    sponsorText = (
      <Row className={`${styles.Home} d-flex justify-content-center align-items-center`}>
        {sponsorDetails.map((s, i) => {
          return (
            <Col key={i}
                 xs={6}
                 sm={4}
                 lg={2}>
              <a alt={s.alt}
                 href={s.href}
                 title={s.title}>
                <Image className={'img-fluid'}
                       src={s.file}
                       alt={s.alt}
                />
              </a>
            </Col>
          );
        })}
      </Row>
    );
  } else {
    sponsorText = (
      <div className={styles.Sponsors}>

        <Row className="d-flex justify-content-center d-lg-none my-2">
          {sponsorDetails.map((s, i) => {
            return (
              <Col key={i}
                   xs={6}
                   sm={4}>
                <a alt={s.alt}
                   href={s.href}
                   title={s.title}>
                  <Image className="img-fluid"
                         src={s.file}
                         alt={s.alt}
                  />
                </a>
              </Col>
            );
          })}
        </Row>
        <Row className="d-none d-lg-flex flex-column">
        {/*<Row className="d-none d-lg-block">*/}
          {sponsorDetails.map((s, i) => {
            return (
              <a key={i}
                 className="d-block mb-2"
                 alt={s.alt}
                 href={s.href}
                 title={s.title}>
                <Image className="img-fluid"
                       src={s.file}
                       alt={s.alt}
                />
              </a>
            );
          })}
        </Row>
      </div>
    );
  }

  return sponsorText;
};

export default sponsors;
