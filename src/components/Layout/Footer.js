import Image from "next/image";
import Sponsors from "../Sponsors/Sponsors";
import logo from '../../images/logo.png';

const Footer = () => {
  return (
    <div>
      <Sponsors/>
      <hr/>
      {/*<div className={'row'}>*/}
      {/*  <div className={'col-12'}>*/}

      <div className={`row d-flex justify-content-center flex-wrap`}>

        <div className={`col-4 col-md-3`}>
          <Image src={logo}
                 alt={'Tournament logo'}
                 className={`img-fluid logo-image`}/>
        </div>

        <p className={'col-4 align-self-center pb-md-0'}>
            <span>
              &copy; 2025&nbsp;
            </span>
          <span>
              Big D Classic
            </span>
        </p>

        <p className={`col-12 d-md-none hero-photo-credit`}>
          Dallas skyline photo by <a
          href="https://unsplash.com/@gabrielrana?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Gabriel
          Tovar</a> on <a
          href="https://unsplash.com/photos/time-lapse-photography-of-city-during-night-time-Zn1nqVeTRvI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </p>

      </div>
      {/*</div>*/}
    </div>
  )
}

export default Footer;
