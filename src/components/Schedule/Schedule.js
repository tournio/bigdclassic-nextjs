import styles from './Schedule.module.scss';
import Link from "next/link";

const Schedule = () => {

  const days = [
    {
      date: 'Friday, August 8',
      events: [
        {
          name: 'Tournament Registration',
          detail: 'Plano Super Bowl',
          more: '',
          time: '6pm - 9pm',
        },
        {
          name: 'Optional Bowling Event TBD',
          detail: 'Plano Super Bowl',
          more: '',
          time: '',
        },
      ],
    },
    {
      date: 'Saturday, August 9',
      events: [
        {
          name: 'Tournament Registration',
          detail: 'Plano Super Bowl',
          more: 'Registration closes promptly at 11:45!',
          time: '10am - 11:45am',
        },
        {
          name: 'Singles & Doubles Events',
          detail: 'Plano Super Bowl',
          more: '30-minute break between events',
          time: '12pm - 6pm',
        },
      ],
    },
    {
      date: 'Sunday, August 10',
      events: [
        {
          name: 'Bowler Breakfast',
          detail: 'Plano Super Bowl',
          more: 'Includes awards and raffles!',
          time: '9am - 10:00am',
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
          more: 'Team & All Events awards, Scratch Shootout qualifiers',
          time: '1:30pm - 1:45pm',
        },
        {
          name: 'Scratch Shootout',
          detail: 'Plano Super Bowl',
          more: '',
          time: '1:45pm - 4pm',
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
        {/*<p className={`${styles.Disclaimer}`}>*/}
        {/*  (All times subject to change)*/}
        {/*</p>*/}

        <p className={`${styles.Disclaimer}`}>
          (2026 schedule TBD)
        </p>

        {/*{days.map((day, i) => (*/}
        {/*  <div key={`day_${i}`}*/}
        {/*       className={`row g-0 ${styles.DayOfEvents}`}>*/}
        {/*    <div className={`${styles.Date} col-md-4`}>*/}
        {/*      <h4 className={'me-md-3'}>*/}
        {/*        {day.date}*/}
        {/*      </h4>*/}
        {/*    </div>*/}

        {/*    <div className={`col-md-8`}>*/}
        {/*      {day.events.map((e, j) => (*/}
        {/*        <div key={`event_${j}`}>*/}
        {/*          <div className={`${styles.Event} d-flex justify-content-between`}>*/}
        {/*            <div className={`${styles.Detail}`}>*/}
        {/*              <h5>*/}
        {/*                {e.name}*/}
        {/*              </h5>*/}
        {/*              {e.detail && (*/}
        {/*                <p>*/}
        {/*                  {e.detail}*/}
        {/*                </p>*/}
        {/*              )}*/}
        {/*              {e.more && (*/}
        {/*                <p className={styles.More}>*/}
        {/*                  {e.url && (*/}
        {/*                    <Link href={e.url}*/}
        {/*                          target={'_blank'}>*/}
        {/*                      {e.more}*/}
        {/*                    </Link>*/}
        {/*                  )}*/}
        {/*                  {!e.url && e.more}*/}
        {/*                </p>*/}
        {/*              )}*/}
        {/*            </div>*/}
        {/*            <div className={`${styles.Time}`}>*/}
        {/*              <h5>*/}
        {/*                {e.time}*/}
        {/*              </h5>*/}
        {/*            </div>*/}
        {/*          </div>*/}

        {/*          {j+1 < day.events.length && <hr />}*/}
        {/*        </div>*/}
        {/*      ))}*/}
        {/*    </div>*/}

        {/*  </div>*/}
        {/*))}*/}
      </div>

      {/*<div className={`section-image-background ${styles.BackgroundImage}`}></div>*/}
      {/*<div className={`section-background-shade ${styles.BackgroundShade}`}></div>*/}
    </section>
  )
}

export default Schedule;
