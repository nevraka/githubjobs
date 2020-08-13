import React from 'react';
import { Space } from 'antd';
import './App.css';
import howitworks from '../image/howitworks.png';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <>
      <Space direction="vertical">
        <div className="first">'https://jobs.github.com/post'</div>
      </Space>
      <img src={howitworks} alt="" className="image"></img>
      <div style={{ textAlign: 'center', padding: '55px', fontWeight: 'bold' }}>
        Questions? Submit a request via our{' '}
        <Link to="/github_support">contact form</Link> and let's talk.
      </div>
    </>
  );
};

export default HowItWorks;
