import React from 'react';
import { Button, Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import './App.css';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer>
      <div>
        <Button type="link" className="footer-button">
          The GitHub Blog
        </Button>
        <Button type="link" className="footer-button">
          Contact
        </Button>
        <Button type="link" className="footer-button">
          Privacy
        </Button>
        <Button type="link" className="footer-button">
          Terms
        </Button>
        <Button type="link" className="footer-button">
          API
        </Button>
        <GithubOutlined className="github" />
        <span className="reserved">
          © 2020 GitHub Inc. All rights reserved.
        </span>
      </div>
    </Footer>
  );
};

export default AppFooter;
