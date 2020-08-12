import React from 'react';
import { Space } from 'antd';
import './App.css';
import howitworks from '../image/howitworks.png';

const HowItWorks = () => {
  return (
    <>
      <Space direction="vertical">
        <div className="first">'https://jobs.github.com/post'</div>
      </Space>
      <img src={howitworks} alt="" className="image"></img>
    </>
  );
};

export default HowItWorks;
