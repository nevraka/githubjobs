import React from 'react';
import { Space } from 'antd';
import Link from 'next/link';

const HowItWorks = () => {
  return (
    <>
      <Space direction="vertical">
        <div className="first">'https://jobs.github.com/post'</div>
      </Space>
      <img src="howitworks.png" alt="" className="image"></img>
      <div style={{ textAlign: 'center', padding: '55px', fontWeight: 'bold' }}>
        Questions? Submit a request via our{' '}
        <Link href="/support">contact form</Link> and let's talk.
      </div>
    </>
  );
};

export default HowItWorks;
