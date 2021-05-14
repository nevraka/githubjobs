import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import SupportPage from './SupportPage';
import CompanySearch from './CompanySearch';

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
        </Switch>
        <AppFooter />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
