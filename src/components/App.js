import React, { useState, useEffect } from 'react';
import { Button, Table, Layout, Divider } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import githubJobs from '../api/githubJobs';
import SearchBox from './SearchBox';
import MainResult from './MainResult';
import './App.css';

const { Column } = Table;
const { Header, Footer, Content } = Layout;

const App = () => {
  const [desc, setDesc] = useState('');
  const [loc, setLoc] = useState('');
  const [jobs, setJobs] = useState([]);
  const [fullTime, setFullTime] = useState(false);

  const onSearch = async () => {
    const result = await githubJobs.get(
      `/positions.json?search=${desc}&location=${loc}&full_time=${fullTime}`
    );
    setJobs(result.data);
  };

  useEffect(() => {
    onSearch();
  }, []);

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
      <div>
        <SearchBox
          className="search-div"
          setFullTime={setFullTime}
          onSearch={onSearch}
          desc={desc}
          setDesc={setDesc}
          loc={loc}
          setLoc={setLoc}
        />
      </div>
      <Content>
        <MainResult jobs={jobs} />
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
