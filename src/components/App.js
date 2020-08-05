import React, { useState } from 'react';
import { Button, Table, Layout, Divider, Checkbox } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import githubJobs from '../api/githubJobs';
import SearchBox from './SearchBox';
import './App.css';

const { Column } = Table;
const { Header, Footer, Content } = Layout;

const App = () => {
  const [desc, setDesc] = useState('');
  const [loc, setLoc] = useState('');
  const [jobs, setJobs] = useState([]);

  const onSearch = async (phrase) => {
    const result = await githubJobs.get(
      `/positions.json?search=${desc}&location=${loc}`
    );
    setJobs(result.data);
  };

  return (
    <Layout>
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
      <div className="search-div">
        <SearchBox
          onSearch={onSearch}
          desc={desc}
          setDesc={setDesc}
          loc={loc}
          setLoc={setLoc}
        />
        <div className="checkbox">
          <Checkbox /> Full Time Only
        </div>
        <Button type="primary" onClick={onSearch} className="search-button">
          Button
        </Button>
      </div>
      <Content>
        <Table dataSource={jobs}>
          <Column title="Company" dataIndex="company" key="company"></Column>
        </Table>
      </Content>
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
    </Layout>
  );
};

export default App;
