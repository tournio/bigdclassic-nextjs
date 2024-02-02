import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

import logo from '../../images/logo.jpg';
import cfaLogo from '../../images/cfa.jpg';

import styles from './MainText.module.scss';

const MainText = () => {
  const tournamentDates = 'August 2024';

  return (
    <div className={styles.MainText}>
      <Row className={`${styles.MainText}`}>
        <Col xs={5} sm={6}>
          <Image src={logo}
                 alt={'Big D Classic tournament logo'}
                 className={styles.Logo}
          />
        </Col>
        <Col className={'text-md-center'}>
          <h5 className={`display-5 ${styles.Dates}`}>
            {tournamentDates}
          </h5>
          <h6 className={`display-6 ${styles.City}`}>
            Dallas, TX
          </h6>
        </Col>
      </Row>

      <hr/>

      <Row>
        <Col xs={12} md={8}>
          <a href={'https://www.cfa.lgbt/'}
             className={`${styles.FloatingLogo} float-end d-md-none`}
             target={'_new'}>
            <Image className={`${styles.BeneficiaryLogo}`}
                   src={cfaLogo}
                   alt={'Coalition for Aging LGBT Logo'}
            />
          </a>
          <p>
            Our tournament raises funds for the{' '}
            <a href={'https://www.cfa.lgbt/'}
               target={'_new'}>
              Coalition for Aging LGBT
            </a>
            . Their mission is to improve and protect the quality of life of older LGBT adults in North Texas through
            coordination and collaborations for health, housing, advocacy, financial security and social services.
          </p>
          {/*<p>*/}
          {/*  Volunteers from this organization will be at the tournament selling raffle tickets and raising awareness, so be sure to bring plenty of cash and support them!*/}
          {/*</p>*/}
          <p>
            <a href={'https://www.cfa.lgbt/'}
               target={"_new"}>
              Learn more
            </a>
          </p>
        </Col>
        <Col>
          <a href={'https://www.cfa.lgbt/'}
             className={'d-none d-md-block'}
             target={'_new'}>
            <Image className={`${styles.BeneficiaryLogo}`}
                   src={cfaLogo}
                   alt={'Coalition for Aging LGBT Logo'}
            />
          </a>
        </Col>
      </Row>
    </div>
  )
}

export default MainText;
