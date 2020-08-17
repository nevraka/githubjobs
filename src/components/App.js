import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import JobDetails from './JobDetails';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import HowItWorks from './HowItWorks';
import SupportPage from './SupportPage';
import CompanySearch from './CompanySearch';
import './App.css';

const { Content } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppHeader onSearch={null} />
        <Switch>
          <Route path="/companies/:company">
            <CompanySearch />
          </Route>
          <Route path="/github_support">
            <SupportPage />
          </Route>
          <Route path="/faq">
            <HowItWorks />
          </Route>
          <Route path="/position/:id">
            <JobDetails />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
        <AppFooter />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
