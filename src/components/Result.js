import React from 'react';
import { List, Divider } from 'antd';
import Link from 'next/link';
import moment from 'moment';

const Result = ({ jobs, title }) => {
  return (
    <div className="all-results">
      <span style={{ marginLeft: '40px' }}>{title}</span>
      <Divider />
      <div>
        {jobs && (
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
                        <Link href={`/position/${job.id}`} passHref>
                          <a>{job.title}</a>
                        </Link>
                        <div className="company-type">
                          <Link
                            href={`/company/${job.company}`}
                            passHref
                            style={{ color: '#999' }}
                          >
                            <a>{job.company}</a>
                          </Link>
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
        )}
      </div>
    </div>
  );
};
export default Result;
