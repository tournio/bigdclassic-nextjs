import React from 'react';

import Layout from "../components/layout";

import styles from './rules.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const rules = () => {
  return (
    <Layout>
      <div className={styles.Rules}>
        <h1 className="display-4">
          Tournament Rules
        </h1>

        <h5 className="text-muted">
          Rules are being finalized at this very moment...
        </h5>

      </div>
    </Layout>
  );
};

export default rules;
