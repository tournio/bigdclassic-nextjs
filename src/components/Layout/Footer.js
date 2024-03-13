import Sponsors from "../Sponsors/Sponsors";

const Footer = () => {
  return (
    <div>
      <Sponsors/>
      <hr />
      <div className={'row'}>
        <div className={'col-12'}>
          <p className={'d-flex justify-content-center flex-wrap pb-md-0'}>
          <span>
            &copy; 2024&nbsp;
          </span>
            <span>
            Big D Classic
          </span>
          </p>

          <p className={`d-md-none hero-photo-credit`}>
            Dallas skyline photo by <a
            href="https://unsplash.com/@gabrielrana?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Gabriel
            Tovar</a> on <a
            href="https://unsplash.com/photos/time-lapse-photography-of-city-during-night-time-Zn1nqVeTRvI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
