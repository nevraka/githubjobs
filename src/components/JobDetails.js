import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Divider } from 'antd';
import { useParams } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import githubJobs from '../api/githubJobs';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const getJob = async () => {
      const result = await githubJobs.get(`/positions/${id}.json`);
      setJob(result.data);
    };
    getJob(id);
  }, [id]);

  return (
    job && (
      <div className="content">
        <div className="button-arrow">
          <Link to="/" style={{ fontWeight: 'bold' }}>
            <ArrowLeftOutlined /> See all positions
          </Link>
          <div className="type-company">
            <div>{job.type}</div> &nbsp; / &nbsp;<div>{job.location}</div>
          </div>
          <div className="title">{job.title}</div>
        </div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={16} className="job-description gutter-row">
            <div>
              <ReactMarkdown source={job.description} escapeHtml={false} />
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <Card className="side" style={{ fontWeight: 'bold' }}>
              <p>How to Apply</p>
              <Divider />
              <div style={{ wordBreak: 'break-all', fontSize: '11px' }}>
                <ReactMarkdown source={job.how_to_apply} escapeHtml={false} />
              </div>
            </Card>
            <Card className="side-logo" style={{ fontWeight: 'bold' }}>
              <p>{job.company}</p>
              <Divider />
              <img
                src={job.company_logo}
                style={{ height: 260, width: 260 }}
                alt=""
              />
            </Card>
          </Col>
        </Row>
      </div>
    )
  );
};

export default JobDetails;
