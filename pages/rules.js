import React from 'react';

import Layout from "../components/layout";

import styles from './rules.module.scss';

const rules = () => {
  return (
    <Layout>
      <div className={styles.Rules}>
        <h1 className="display-4">
          Tournament Rules
        </h1>
      </div>
    </Layout>
  );
};

export default rules;
