import React from 'react';
import { Space } from 'antd';
import Link from 'next/link';
import styles from '../styles/how-it-works.module.css';

const HowItWorks = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <Space direction="vertical">
          <div className={styles.first}>'https://jobs.github.com/post'</div>
        </Space>
      </div>
      <div>
        <img src="howitworks.png" alt="" className="image" />
      </div>
      <div className={styles.question}>
        Questions? Submit a request via our&nbsp;
        <Link href="/contact">
          <a className={styles.contactlink}>contact form</a>
        </Link>
        &nbsp;and let's talk.
      </div>
    </div>
  );
};

export default HowItWorks;
