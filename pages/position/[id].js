import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Divider } from 'antd';
import { useRouter } from 'next/router';
import { ArrowLeftOutlined } from '@ant-design/icons';
import axios from 'axios';

const JobDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState(null);

  useEffect(() => {
    const getJob = async () => {
      const result = await axios.get(`/api/positions/${id}`);
      setJob(result.data);
    };
    if (id) {
      getJob(id);
    }
  }, [id]);

  return job ? (
    <div className="content">
      <div className="button-arrow">
        <Link href="/" style={{ fontWeight: 'bold' }}>
          <span>
            <ArrowLeftOutlined />
            See all positions
          </span>
        </Link>
        <div className="type-company">
          <div>{job.type}</div> &nbsp; / &nbsp;<div>{job.location}</div>
        </div>
        <div className="title">{job.title}</div>
      </div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={16} className="job-description gutter-row">
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </Col>
        <Col className="gutter-row" span={8}>
          <Card className="side" style={{ fontWeight: 'bold' }}>
            <p>How to Apply</p>
            <Divider />
            <div
              style={{ wordBreak: 'break-all', fontSize: '11px' }}
              dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
            />
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
  ) : null;
};

export default JobDetails;
