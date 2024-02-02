import Image from 'next/image';
import Link from 'next/link';

import classes from './Sponsors.module.scss';

import igbo from '../../images/sponsors/igbo600w.png';
import storm from '../../images/sponsors/storm-black.png';
import usbc from '../../images/sponsors/usbc.png';
import olba from '../../images/sponsors/olba.gif';
import woodys from '../../images/sponsors/woodys.jpg';

const Sponsors = () => {
  const sponsorDetails = [
    {
      alt: 'Storm Bowling Products',
      href: 'https://stormbowling.com/',
      title: 'Storm Bowling Products',
      src: storm,
      classNames: classes.AdjustedBrightness,
    },
    {
      alt: 'The International Gay Bowling Organization',
      href: 'http://www.igbo.org/',
      title: 'The International Gay Bowling Organization',
      src: igbo,
      classNames: '',
    },
    {
      alt: 'The United States Bowling Congress',
      href: 'http://www.bowl.com/',
      title: 'The United States Bowling Congress',
      src: usbc,
      classNames: '',
    },
    {
      alt: 'The Oak Lawn Bowling Association',
      href: 'https://www.facebook.com/oaklawnbowlingassociation',
      title: 'The Oak Lawn Bowling Association',
      src: olba,
      classNames: '',
    },
    {
      alt: "Woody's Dallas",
      href: 'http://dallaswoodys.com/',
      title: "Woody's Dallas",
      src: woodys,
      classNames: '',
    },
  ];

  return (
    <div className={classes.Sponsors}>
      <div className={`row g-0 align-items-center justify-content-around ${classes.Row}`}>
        {sponsorDetails.map((s, i) => {
          return (
            <div key={i} className={`col-5 ${classes.ImageContainer}`}>
              <Link href={s.href}
                    target={'_blank'}
                    title={s.title}>
                <Image className={`img-fluid ${s.classNames}`}
                       alt={s.alt}
                       src={s.src} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sponsors;
