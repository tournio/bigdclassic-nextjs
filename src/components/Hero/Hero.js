import styles from './Hero.module.scss';

const Hero = () => {
  const tournDates = 'August 2025';
  const tournamentDates = 'August 2025';

  return (
    <div className={`${styles.Hero}`}>
      <div className={`${styles.JumbotronImage} d-flex justify-content-end flex-column`}>
        {/* Mobile devices only */}
        <div className={`d-sm-none ${styles.Headings}`}>
          <h1 className={`${styles.Title} display-1`}>
            Big D Classic
          </h1>

            <h2 className={`${styles.Dates} display-4`}>
              {tournDates}
            </h2>
        </div>

        {/* Devices larger than phones */}
        <div className={`d-none d-sm-block ${styles.Headings}`}>
          <h1 className={`${styles.Title} display-1`}>
            Big D Classic
          </h1>

          <h2 className={`${styles.Dates} display-4`}>
            {tournamentDates}
          </h2>
        </div>
      </div>

      <div className={`d-none d-md-block ${styles.PhotoCredit}`}>
        Photo by <a href="https://unsplash.com/@gabrielrana?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Gabriel Tovar</a> on <a href="https://unsplash.com/photos/time-lapse-photography-of-city-during-night-time-Zn1nqVeTRvI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      </div>
    </div>
  )
}

export default Hero;
