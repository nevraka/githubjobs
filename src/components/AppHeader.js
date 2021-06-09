import React from 'react';
import { Layout, Divider, Row, Col } from 'antd';
import Link from 'next/link';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header
      id="header"
      style={{
        padding: '10px 15px 0px',
        height: 'auto',
        minHeight: '64px',
      }}
    >
      <Row justify="space-between">
        <Col>
          <Link href="/" className="header-brand">
            GitHub Jobs
          </Link>
        </Col>
        <Col className="all-header-button">
          <Link href="/" className="header-button">
            All jobs
          </Link>
          <Divider type="vertical" className="divider" />
          <Link href="/post" className="header-button">
            Post a job
          </Link>
          <Divider type="vertical" className="divider" />
          <Link href="/how-it-works" className="header-button">
            How it works
          </Link>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
