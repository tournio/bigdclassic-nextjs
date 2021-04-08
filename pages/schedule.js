import React from 'react';

import Layout from '../components/layout';

import styles from './schedule.module.scss';

const schedule = () => {
  return (
    <Layout>
      <div className={styles.Schedule}>
        <h1 className="display-4">
          Schedule of Events
        </h1>
        <p>TBD...</p>
      </div>

    </Layout>
  );
};

export default schedule;
