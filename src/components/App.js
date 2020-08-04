import React, { useState } from 'react';
import { Button, Table, Layout, Divider } from 'antd';
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
      <SearchBox
        onSearch={onSearch}
        desc={desc}
        setDesc={setDesc}
        loc={loc}
        setLoc={setLoc}
      />
      <Content>
        <Table dataSource={jobs}>
          <Column title="Company" dataIndex="company" key="company"></Column>
        </Table>
        Hello
        <Button type="primary" onClick={onSearch}>
          Button
        </Button>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
