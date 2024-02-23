import styles from './Hero.module.scss';

const Hero = () => {
  const tournDates = 'Aug 9-11, 2024';
  const tournamentDates = 'August 9-11, 2024';

  return (
    <div className={`${styles.Hero}`}>
      <div className={`${styles.JumbotronImage} d-flex justify-content-end flex-column`}>

        {/* Devices larger than phones */}
        <div className={`d-none d-sm-block ${styles.Headings}`}>
          <h1 className={`${styles.Title} display-1`}>
            Big D Classic
          </h1>

          <h2 className={`${styles.Dates} display-4`}>
            {tournamentDates}
          </h2>
        </div>

        {/* Mobile devices only */}
        <div className={`d-sm-none ${styles.Headings}`}>
          <h1 className={`${styles.Title}`}>
            Big D Classic
          </h1>

          <h2 className={`${styles.Dates}`}>
            {tournDates}
          </h2>
        </div>
      </div>

    </div>
  )
}

export default Hero;
