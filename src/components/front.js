import Card from "react-bootstrap/Card";

import styles from './front.module.scss';

const Front = () => {
  const tournamentDates = 'August 2024';

  return (
    <Card className={styles.Front}>
      <Card.Header>
        <Card.Title>
          {tournamentDates}
        </Card.Title>
        <Card.Subtitle className="text-muted">
          Plano, TX
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <div>
          <img className="float-end img-fluid col-5 col-sm-3 ps-1"
               src="/src/images/logo.jpg"
               alt="Big D Classic logo"
          />
        </div>
        <Card.Text>
          In a tradition dating back very nearly to the 20th century, bowlers from all around the country descend
          upon north Texas in the middle of August to beat the heat and engage in a little friendly competition,
          all while raising money for a good cause.
        </Card.Text>
        <hr />
        <div>
          <a href={'https://www.cfa.lgbt/'}
             target={'_new'}
          >
            <img className={`float-start ${styles.BeneficiaryLogo}`}
                 src={'/images/cfa.jpg'}
                 alt={'Coalition for Aging LGBT Logo'}
            />
          </a>
          <Card.Text>
            Our tournament raises funds for the{' '}
            <a href={'https://www.cfa.lgbt/'}
              target={'_new'}>
              Coalition for Aging LGBT
            </a>
            . Their mission is to improve and protect the quality of life of older LGBT adults in North Texas through coordination and collaborations for health, housing, advocacy, financial security and social services.
          </Card.Text>
          {/*<Card.Text>*/}
          {/*  Volunteers from this organization will be at the tournament selling raffle tickets and raising awareness, so be sure to bring plenty of cash and support them!*/}
          {/*</Card.Text>*/}
          <Card.Text>
            <a href={'https://www.cfa.lgbt/'}
               target={"_new"}>
              Learn more
            </a>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}
export default Front;
