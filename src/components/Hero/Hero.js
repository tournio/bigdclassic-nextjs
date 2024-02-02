import styles from './Hero.module.scss';

const Hero = () => {

  return (
    <section className={`${styles.Hero}`}>
      <div className={`${styles.JumbotronImage}`}/>

      <div className={'row'}>
        <p className={`${styles.PhotoCredit} col-12`}>
          Photo credit:{' '}
          <a href="https://www.flickr.com/photos/daxis/18378516600">
            Daxis
          </a>
        </p>
      </div>
    </section>
  )
}

export default Hero;
