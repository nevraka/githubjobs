import React from 'react';
import { Button, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { GithubOutlined } from '@ant-design/icons';
import './App.css';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer
      style={{
        flex: 1,
        flexDirection: 'column',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        background: '#f5f5f5',
        borderTop: '1px solid #ddd',
      }}
    >
      <div>
        <Button type="link" className="footer-button">
          The GitHub Blog
        </Button>
        <Link to="/github_support">
          <Button type="link" className="footer-button">
            Contact
          </Button>
        </Link>
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
