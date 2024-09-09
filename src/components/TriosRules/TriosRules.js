import styles from './TriosRules.module.scss';
import ReactMarkdown from "react-markdown";
import React from "react";

const TriosRules = () => {
  const sections = [
    {
      header: 'Basics',
      markdown: `
1. Tournament takes place on Saturday, 23 November, 2024.
1. Location is Plano Super Bowl, 2521 K Ave, Plano, TX 75074, 972-881-0242
1. Check-in begins at 11am, bowling begins at 12pm.
      `,
    },
    {
      header: 'Eligibility',
      markdown: `
1. 3 person teams, any combination of men and women, with a maximum team average of 650.
1. Event is limited to 40 teams.
1. No substitute bowlers once tournament has started; a handicapped score of 190 will be used if a bowler drops.
      `,
    },
    {
      header: 'Averages and Handicap',
      markdown: `
1. Handicap 90% of 230, average based on 2023/24 Standard Composite Book, PSB tournament average, current average, or prior book averages.
1. **Director reserves the right to re-rate a bowler prior to start of the event.**
1. The top 4 teams will bowl a Baker Style, single game, stepladder final.
1. Handicap will be 90% of the difference in team averages.
1. Other cashing teams will be paid out prior to the stepladder final.
`,
    },
    {
      header: 'Logistics',
      markdown: `
1. Tournament is on a recreational/house pattern.
1. Team order will be low to high average.
1. Tournament consists of 6 games of team match play.
1. Teams will draw for lane assignments for game 1. 
1. Games 2-6 are position rounds, with position determined by points won and total pins.
1. Each game is match play with 2 points awarded for individual wins, 4 points for team win, 10 points total per game.
1. Lane assignments will be announced once standings are calculated after each game.
1. The top 4 teams will bowl a Baker Style, single game, stepladder final.
1. Handicap will be 90% of the difference in team averages.
1. Other cashing teams will be paid out prior to the stepladder final.
`,
    },
    {
      header: 'Fees and Prizes',
      markdown: `
1. Entry fee is $100 per bowler, $300 per team.
1. Cash and credit cards accepted (no fee)
1. Pay ratio is 1 in 4.
1. Assuming a full tournament, the total payout will be (by place):

    1st:
    $1,950

    2nd:
    $1,140

    3rd:
    $930

    4th:
    $810

    5th:
    $690

    6th:
    $600

    7th:
    $510

    8th:
    $450

    9th:
    $390

    10th:
    $330

    **Total:**
    $7,800
`,
    },
  ];

  return (
    <div>
      <section className={styles.TriosRules}>
        <h3 className={`section-heading`}>
          Match Play Trios Rules
        </h3>

        <ol>
          {sections.map((section, i) => (
            <li key={i}>
              <h4>
                {section.header}
              </h4>

              <ReactMarkdown>{section.markdown}</ReactMarkdown>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default TriosRules;
