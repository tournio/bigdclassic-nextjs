import React from 'react';

import Layout from "../components/layout";

import styles from './links.module.scss';

const links = () => {
  return (
    <Layout>
      <div className={styles.Links}>
        <h1 className="display-4">
          Links of Interest
        </h1>
      </div>
    </Layout>
  );
};

export default links;
