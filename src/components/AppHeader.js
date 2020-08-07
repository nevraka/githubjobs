import React from 'react';
import { Button, Layout, Divider } from 'antd';
import './App.css';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header id="header">
      GitHub Jobs
      <div className="all-header-button">
        <Button type="link" className="header-button">
          All jobs
        </Button>
        <Divider type="vertical" className="divider" />
        <Button type="link" className="header-button">
          Post a job
        </Button>
        <Divider type="vertical" className="divider" />
        <Button type="link" className="header-button">
          How it works
        </Button>
      </div>
    </Header>
  );
};

export default AppHeader;
