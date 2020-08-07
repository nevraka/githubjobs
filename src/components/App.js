import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import githubJobs from '../api/githubJobs';
import SearchBox from './SearchBox';
import MainResult from './MainResult';
import JobDetails from './JobDetails';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import './App.css';

const { Content } = Layout;

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

  return (
    <BrowserRouter>
      <Layout>
        <AppHeader />
        <Switch>
          <Route path="/position/:id">
            <JobDetails />
          </Route>
          <Route path="/">
            <div>
              <SearchBox
                className="search-div"
                setFullTime={setFullTime}
                onSearch={onSearch}
                desc={desc}
                setDesc={setDesc}
                loc={loc}
                setLoc={setLoc}
                jobs={jobs}
                setJobs={setJobs}
              />
            </div>
            <Content>
              <MainResult jobs={jobs} />
            </Content>
          </Route>
        </Switch>
        <AppFooter />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
