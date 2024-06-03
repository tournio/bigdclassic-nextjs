import Image from "next/image";

import cfaLogo from '../../images/cfa.jpg';

import styles from './MainText.module.scss';
import Spotlight from "../Spotlight/Spotlight";

const MainText = () => {
  return (
    <div className={styles.MainText}>
      <div className={`row`}>
        <div className={`col-12`}>
          {/* Only show this paragraph on larger viewports. */}
          <p className={`d-none d-md-block`}>
            In a tradition dating back very nearly to the 20th century, bowlers from all around the country descend upon
            north Texas in the middle of August to beat the heat and engage in a little friendly competition, all while
            raising money for a good cause.
          </p>

          <p>
            Note: <strong>all</strong> rainbow raffle, tournament entry, and cash prizes will be pre-drawn and published online Saturday evening during the Shift B Team Event, so bowlers do not need to be present at any one event to win.
          </p>

          <div className={`d-md-none col-12 mb-3`}>
            <Spotlight/>
          </div>

          <hr className={`d-none d-md-block`}/>

          <a href={'https://www.cfa.lgbt/'}
             className={`${styles.FloatingLogo} float-end ms-3`}
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
        </div>

      </div>
    </div>
  )
}

export default MainText;
