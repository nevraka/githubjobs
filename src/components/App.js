import React, { useState } from 'react';
import { Button, Table } from 'antd';
import githubJobs from '../api/githubJobs';

const { Column } = Table;

const App = () => {
  const [jobs, setJobs] = useState([]);

  const onSearch = async (phrase) => {
    const result = await githubJobs.get(`/positions.json`);
    setJobs(result.data);
  };

  return (
    <div>
      <Table dataSource={jobs}>
        <Column title="Company" dataIndex="company" key="company"></Column>
      </Table>
      Hello
      <Button type="primary" onClick={onSearch}>
        Button
      </Button>
    </div>
  );
};

export default App;
