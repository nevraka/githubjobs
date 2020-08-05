import React from 'react';
import { List } from 'antd';
import './App.css';

const MainResult = ({ jobs }) => {
  return (
    <div className="all-results">
      All Jobs
      <List
        className="main-job-results"
        itemLayout="horizontal"
        dataSource={jobs}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default MainResult;
