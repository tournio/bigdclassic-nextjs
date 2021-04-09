import React from 'react';

import Layout from "../components/layout";

import styles from './contact.module.scss';

const contact = () => {
  return (
    <Layout>
      <div className={styles.Contact}>
        <h1 className="display-4">
          Tournament Contacts
        </h1>
      </div>
    </Layout>
  );
};

export default contact;
