import React from 'react';
import { Button, Layout, Divider } from 'antd';
import './App.css';
import { useHistory, Link } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = ({ onSearch }) => {
  const history = useHistory();

  return (
    <Header id="header">
      <Link to="/" className="header-brand">
        GitHub Jobs
      </Link>
      <div className="all-header-button">
        <Button type="link" className="header-button" onClick={onSearch}>
          All jobs
        </Button>
        <Divider type="vertical" className="divider" />
        <Button type="link" className="header-button">
          Post a job
        </Button>
        <Divider type="vertical" className="divider" />
        <Button
          type="link"
          className="header-button"
          onClick={() => {
            history.push('/faq');
          }}
        >
          How it works
        </Button>
      </div>
    </Header>
  );
};

export default AppHeader;
