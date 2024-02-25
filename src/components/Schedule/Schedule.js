import styles from './Schedule.module.scss';
import Link from "next/link";

const Schedule = () => {

  const days = [
    {
      date: 'Friday, August 9',
      events: [
        {
          name: 'Tournament Check-in',
          detail: 'Plano Super Bowl',
          more: 'Event room, behind lanes 1-6',
          time: '6pm - 8pm',
        },
        {
          name: 'Optional 9-pin No-tap',
          detail: 'Plano Super Bowl',
          more: 'Open to all, including non-tournament bowlers',
          time: '8pm - 11pm',
        },
      ],
    },
    {
      date: 'Saturday, August 10',
      events: [
        {
          name: 'Tournament Registration',
          detail: 'Plano Super Bowl',
          more: 'Event room, behind lanes 1-6',
          time: '8am - 9:45am',
        },
        {
          name: 'Singles and Doubles Events',
          detail: 'Plano Super Bowl',
          more: '30-minute break between events',
          time: '9am - 4pm',
        },
      ],
    },
    {
      date: 'Sunday, August 11',
      events: [
        {
          name: 'Singles/Doubles Awards Breakfast',
          detail: 'Plano Super Bowl',
          more: 'Plus raffle giveaways!',
          time: '9am - 9:45am',
        },
        {
          name: 'Team Event',
          detail: 'Plano Super Bowl',
          more: '',
          time: '10am - 1pm',
        },
        {
          name: 'Announcements',
          detail: 'Plano Super Bowl',
          more: 'Team & All Events winners, Scratch Shootout qualifiers',
          time: '1:15pm - 1:30pm',
        },
        {
          name: 'Scratch Shootout',
          detail: 'Plano Super Bowl',
          more: '',
          time: '1:30 pm - 4pm',
        },
      ]
    },
  ]

  return (
    <section className={styles.Schedule} id={'section-schedule'}>
      <h3 className={`section-heading`}>
        Schedule of Events
      </h3>

      <div className={styles.Content}>
        <p className={`${styles.Disclaimer}`}>
          (All times subject to change)
        </p>

        {days.map((day, i) => (
          <div key={`day_${i}`}
               className={`row g-0 ${styles.DayOfEvents}`}>
            <div className={`${styles.Date} col-md-4`}>
              <h4 className={'me-md-3'}>
                {day.date}
              </h4>
            </div>

            <div className={`col-md-8`}>
              {day.events.map((e, j) => (
                <div key={`event_${j}`}>
                  <div className={`${styles.Event} d-flex justify-content-between`}>
                    <div className={`${styles.Detail}`}>
                      <h5>
                        {e.name}
                      </h5>
                      {e.detail && (
                        <p>
                          {e.detail}
                        </p>
                      )}
                      {e.more && (
                        <p className={styles.More}>
                          {e.url && (
                            <Link href={e.url}
                                  target={'_blank'}>
                              {e.more}
                            </Link>
                          )}
                          {!e.url && e.more}
                        </p>
                      )}
                    </div>
                    <div className={`${styles.Time}`}>
                      <h5>
                        {e.time}
                      </h5>
                    </div>
                  </div>

                  {j+1 < day.events.length && <hr />}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/*<div className={`section-image-background ${styles.BackgroundImage}`}></div>*/}
      {/*<div className={`section-background-shade ${styles.BackgroundShade}`}></div>*/}
    </section>
  )
}

export default Schedule;
