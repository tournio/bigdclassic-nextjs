import styles from './Rules.module.scss';
import React from "react";

const Rules = () => {
  return (
    <section className={styles.Rules}>
      <h3 className={`section-heading`}>
        Tournament Rules
      </h3>

      {/*<p className={`text-md-center`}>*/}
      {/*  (Pending finalization)*/}
      {/*</p>*/}

      <ol>
        <li>The Big D Classic is an USBC certified tournament. The tournament is a mixed handicap competition open to
          men and women by invitation only. Therefore, the Tournament Director reserves the right to refuse any
          application. Space is limited to 46 teams/184 bowlers. Teams will consist of 4 members, any mix of men and
          women. Partial entries will be accepted as long as they can be accommodated.
        </li>
        <li>Bowlers will hold harmless Big D Classic and Plano Super Bowl from anything resulting from potential
          exposure to COVID-19. All bowlers must sign and agree to abide by the tournament rules on their registration
          form before participating.
        </li>
        <li>Averages, Handicap, &amp; Scores:
          <ol>
            <li>Handicap for the Tournament shall be based on 90% of the difference between the bowler’s scratch average
              and 230. Negative handicap will not apply.
            </li>
            <li>Only 10-pin averages can be used.</li>
          </ol>
        </li>
        <li>Any bowler entering the Big D Classic must use a ten-pin average acceptable to USBC. Use the first
          applicable rule below to determine the entering average:
          <ol>
            <li>
              Bowlers with both a USBC sanctioned 2023-24 Standard Composite book average (minimum 21 games) and a
              current one year rolling IGBO Tournament Database (TAD) average (minimum 9 games) will enter with a
              composite of these two averages. For example, USBC Standard Composite Average is 185 with 99 games, TAD
              average is 180 with 36 games, the composite average is calculated as follows: [(185x99)+(180x36)] /
              [99+36] = 183. Resulting average is truncated.
            </li>
            <li>
              All other bowlers must submit the following averages if available. The highest of these will be used.
              <ol>
                <li>IGBO TAD average (minimum 27 games for current one year rolling period).</li>
                <li>USBC sanctioned 2023-24 Standard Composite book average (minimum of 21 games).</li>
                <li>USBC sanctioned 2022-23 Standard Composite book average (minimum of 21 games).</li>
                <li>If none of these averages are available, a USBC sanctioned summer 2024 league average will be
                  considered; number of games must be submitted. Bowlers with an average from a non-sanctioned league
                  must submit a complete average list from all leagues bowled, including number of games, and a
                  secretary signed letter or league sheet from the league with the bowler’s highest average. In
                  addition, all tournament scores (IGBO and non-IGBO) may be requested for bowlers using average rule
                  3.B.
                </li>
              </ol>
            </li>
            <li>If none of the above is available, then the entering average shall be 230.</li>
            <li className={'fw-bold'}>
              Averages will be verified on the <a href="http://www.bowl.com">www.bowl.com</a> database. Correct USBC
              number must be provided on entry form. Any averages that are unavailable or inaccurate on this site must
              be noted in the comments section of entry form, with separate verification provided by the league
              secretary (letter or standing sheet). Any bowlers with multiple USBC numbers in the past five years or
              have averages with both right and left hands must make this clear in the comments section of the online
              entry form or send an email to the director. It is the entrant’s responsibility to review <a
              href="http://www.bowl.com">www.bowl.com</a> for accuracy and notify tournament officials of any inaccurate
              information. If an entrant fails to do so, all prize monies and side pot monies won prior to payout will
              be forfeited.
            </li>
            <li>
              Bowlers who have qualified for cash and/or merchandise prize(s) of $1000 or more in the position standings
              prize list in any event in any bowling tournament during the past 12-month period must report the
              following:
              <ol>
                <li>Name(s) of tournament(s) and date(s) when prize(s) was/were won.</li>
                <li>Actual scores bowled – all games including optional events.</li>
                <li>Prize position(s).</li>
                <li>Amount or value of prize(s).</li>

                <p>
                  Failure to comply may result in forfeiture of entry fee and prize winnings.
                </p>
              </ol>
            </li>
            <li>
              USBC permits the tournament manager to assign an average higher than minimum average prior to
              participation (USBC Rule 319b). A bowler’s average may be adjusted upward before the entrant bowls. If the
              bowler, upon registering, does not accept the assigned average, he/she is entitled to a refund of the
              entry fee.
            </li>
          </ol>
        </li>
        <li>
          <p>
            <span className={'fw-bold'}>Each entrant must be a member of USBC</span> and provide proof of membership and certification number on the entry form. Proof of membership in the 2023-24 season (sanction card or renewal receipt) should be made available during tournament registration. Non-members shall pay a Participation Fee of $5.00 (USBC Rule 301b).</p>
          <p><span className={'fw-bold'}>Each entrant must be an IGBO member</span> for the 2023-24 season, which
            includes anyone who has bowled in an IGBO-sanctioned league. Otherwise, entrant must be a <span
              className={'fw-bold'}>current IGBO Associate member or pay the IGBO Associate Membership Fee of $25 to join.</span>
          </p>
        </li>
        <li>Each participant shall bowl three (3) games per event and must enter all events. Bowlers are allowed only
          one entry per event in Singles, Doubles, and Team. Doubles/Partnerships must come from the same team. Men and
          women will compete on an equal basis. Team and Doubles Partnerships may consist of any combination of men and
          women.
        </li>
        <li>Late bowlers will begin in the frame in which they are ready to begin bowling. A “zero” score will be
          entered in each frame missed.
        </li>
        <li>Bowlers will be allowed ten (10) minutes of practice per event unless they are late. Late bowlers will
          forfeit practice time for the shift.
        </li>
        <li>Substitutes will be allowed to participate at the Tournament Director’s discretion.</li>
        <li>Entry fee is $120.00 per bowler. The official entry deadline is Wednesday, July 31, 2024. All registration
          and payment are made online at <a href="http://www.bigdclassic.com">www.bigdclassic.com</a>. Send any
          necessary documentation via email to <a href="mailto:director@bigdclassic.com">director@bigdclassic.com</a>.
        </li>
        <li>Full payment of fees must accompany entries. All payments are online through Stripe. Credit and debit cards
          are accepted and processed through this website. <span className={'fw-bold'}>An entry is not considered official until full payment is received.</span>
        </li>
        <li>Entry fees, once received, will not be refunded unless at the Tournament Director&apos;s discretion.</li>
        <li>Optional Individual Scratch Competition. The tournament is offering two optional scratch events –
          Traditional Scratch and Scratch Shoot Out. The five Scratch Divisions for both optional events are as follows:
          <ul className={styles.Divisions}>
            <li>Division A: 205 average and up</li>
            <li>Division B: 190-204 average</li>
            <li>Division C: 175-189 average</li>
            <li>Division D: 155-174 average</li>
            <li>Division E: 0-154 average</li>
          </ul>
          <ol>
            <li>
              Traditional Scratch. The entry fee for this optional event is $20. Payout ratio will be no less than 1:10
              for the following awards: high scratch game, high scratch series, and high scratch all events. All 9 games
              are considered to determine winners. Payout will be 100% per Division.
            </li>
            <li>
              <p>Scratch Shoot Out. The entry fee for this optional event is based on Division as follows: Division A -
                $50, Division B - $40, Division C - $40, Division D - $30, Division E - $30.</p>
              <p>Scratch Shoot Out qualifiers are determined based on the 9-game scratch total pins bowled in singles,
                doubles, and team. With a minimum of 20 entries in the division, the top 8 bowlers in each Division will
                advance to the Scratch Shoot Out competition on Sunday after team event. If there is a tie for the last
                qualifying position, a 9th and 10th frame roll off will be held for bowlers that tied. The Shoot Out
                will consist of four separate cuts. All 8 competitors in each Division will bowl two games on two pairs
                of lanes, switching pairs after game one, and the 4 bowlers with the lowest 2-game total pins will be
                eliminated from competition. The remaining 4 bowlers will bowl one game on the left pair of lanes, and
                bowlers with the lowest 2 scores will be eliminated. The remaining 2 bowlers will bowl one game on the
                right pair of lanes to determine the Champion and 2nd place winner.</p>
              <p>If there are 14-19 entries in a division, the top 6 bowlers will qualify for the Scratch Shoot Out
                (cutting to 4 the first round); 8-13 entries, the top 4 bowlers will qualify for the Scratch Shootout
                (cutting to 2 the first round and eliminating the second round); 4-7 entries, the top 2 bowlers will
                qualify for the Scratch Shootout (eliminating the last two rounds, 2-game total pins to determine
                winner).</p>
            </li>
          </ol>
        </li>
        <li>A completed entry into the tournament consists of the following:
          <ol>
            <li>Completed Online Entry Form on <a href="http://www.bigdclassic.com">www.bigdclassic.com</a>.</li>
            <li>Appropriate fees paid online in U.S. funds via the Stripe link provided online after the registration
              form is submitted.
            </li>
            <li>If required, any additional average verification information must be submitted. This is the case when <a
              href="http://www.bowl.com">www.bowl.com</a> has incomplete information for one or more leagues, or is
              incorrect in some way. Please scan documents and email to <a
                href="mailto:director@bigdclassic.com">director@bigdclassic.com</a>.
            </li>
          </ol>
        </li>
        <li>Each event has its own Prize List. There will be 100% cash return on all prize fees. The payout ratio will
          be 1:8, except for Individual All Events, which only the top three (3) positions will be paid. Payouts will
          occur within thirty (30) days of tournament completion through a mailed check to the winner’s registration
          address.
        </li>
        <li>Premature termination or interruption of the tournament brought about by war, national or local
          disaster/emergency, health pandemic, or emergency causes relating to or from fire, natural disaster, or any
          other reason beyond the control of Big D Classic committee shall cause, to the extent required thereby, all
          advertised prizes guaranteed or otherwise, to be pro-rated in accordance with the number of entrants who have
          bowled in each of the respective events up to the time of such termination.
        </li>
        <li>Tournament Dates: August 9th, 10th, and 11th 2024. All events will be held at <span className={'fw-bold'}>Plano Super Bowl, 2521 K Ave, Plano, TX 75074</span>.
          Phone: 972-881-0242.
        </li>
        <li>Entry Fee Break Down: <span className={'fw-bold'}>$120 per bowler</span> (Prize Fund $66, Lineage $31.50, IGBO
          Fee $2, Awards/Food/Expenses $20.50).
        </li>
        <li>Rules subject to change upon 2024 USBC sanction approval. Any rule changes will be posted at registration.
        </li>
        <li>Equipment Rule: Bowling balls must be USBC approved and drilled meeting all USBC requirements. Any bowling
          balls banned by USBC from National events, but are still sanctioned/approved for league and other tournaments,
          are allowed to be used in this tournament.
        </li>
      </ol>
    </section>
  );
}

export default Rules;
