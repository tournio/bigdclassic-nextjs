import styles from './MainText.module.scss';

const MainText = () => {
  const tournamentDates = 'August 2024';

  return (
    <div className={`${styles.MainText}`}>
      <h4 className={`display-4 ${styles.Dates}`}>
        {tournamentDates}
      </h4>
      <h6 className={`display-6 ${styles.City}`}>
        Dallas, TX
      </h6>
    </div>
  )
}

export default MainText;
