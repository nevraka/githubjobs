import React from 'react';
import { Button, Layout, Divider, Row, Col } from 'antd';
import './App.css';
import { useHistory, Link } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = ({ onSearch }) => {
  const history = useHistory();

  return (
    <Header
      id="header"
      style={{ padding: '0 20px', height: 'auto', minHeight: '64px' }}
    >
      <Row justify="space-between">
        <Col>
          <Link to="/" className="header-brand">
            GitHub Jobs
          </Link>
        </Col>
        <Col className="all-header-button">
          <Link to="/" className="header-button">
            All jobs
          </Link>
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
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
