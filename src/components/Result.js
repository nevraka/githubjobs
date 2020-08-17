import React from 'react';
import { List, Divider } from 'antd';
import { Link } from 'react-router-dom';
import './App.css';
import moment from 'moment';

const Result = ({ jobs, title }) => {
  return (
    <div className="all-results">
      <span style={{ marginLeft: '40px' }}>{title}</span>
      <Divider />
      <div>
        <List
          className="main-job-results"
          itemLayout="horizontal"
          dataSource={jobs}
          renderItem={(job) => (
            <List.Item key={job.id}>
              <List.Item.Meta
                description={
                  <div className="description">
                    <div className="company-title">
                      <Link to={`/position/${job.id}`}>{job.title}</Link>
                      <div className="company-type">
                        <Link
                          to={`/companies/${job.company}`}
                          style={{ color: '#999' }}
                        >
                          {job.company}
                        </Link>{' '}
                        &nbsp;-
                        <div>{job.type}</div>
                      </div>
                    </div>
                    <div className="result-right">
                      <div>{job.location}</div>
                      <div>{moment(job.created_at).fromNow()}</div>
                    </div>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
export default Result;
