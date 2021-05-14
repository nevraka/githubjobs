import React, { useState } from 'react';
import { PageHeader, Divider, Modal } from 'antd';
import { GithubOutlined, UploadOutlined } from '@ant-design/icons';
import { Form, Input, Button, Upload } from 'antd';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';

const SupportPage = () => {
  const [form] = Form.useForm();
  const [value, setValue] = useState('');
  const [selectedTab, setSelectedTab] = useState('write');
  const [modal, setModal] = useState({
    repository: false,
    error: false,
    declined: false,
  });

  const handleClose = () => {
    setModal({
      repository: false,
      error: false,
      declined: false,
    });
  };

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  const loadsuggestions = (text) => {
    return new Promise((accept, reject) => {
      setTimeout(() => {
        const suggestions = [
          {
            preview: 'Andre',
            value: '@andre',
          },
          {
            preview: 'Angela',
            value: '@angela',
          },
          {
            preview: 'David',
            value: '@david',
          },
          {
            preview: 'Louise',
            value: '@louise',
          },
        ].filter((i) => i.preview.toLowerCase().includes(text.toLowerCase()));
        accept(suggestions);
      }, 250);
    });
  };

  return (
    <div className="all-support-page">
      <div className="git-support">
        <GithubOutlined style={{ fontSize: '60px' }} />
        <PageHeader className="site-page-header" title="Github Support" />
      </div>
      <h3 style={{ fontSize: '20px', paddingLeft: '58px' }}>
        Get Help With Github
      </h3>
      <Divider />
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{ remember: true }}
      >
        <div className="input">
          <Form.Item name="basic">
            From
            <Input />
          </Form.Item>
          <Form.Item name="basic">
            Account or organization
            <Input />
          </Form.Item>
          <Form.Item name="basic" type="primary" htmlType="submit">
            Subject
            <Input />
          </Form.Item>
        </div>

        <div className="response">
          <div style={{ fontWeight: '600', marginTop: '16px' }}>
            Looking for help with a common request?
          </div>
          <ul className="quick-response">
            <li>
              <a
                href="!#"
                onClick={(e) => {
                  setModal({ ...modal, repository: true });
                  e.preventDefault();
                }}
              >
                I have a question about a repository on GitHub
              </a>
              <Modal
                title="Repositories hosted on GitHub"
                visible={modal.repository}
                onCancel={handleClose}
              >
                <p>
                  GitHub hosts millions of repositories, each with their own
                  unique workflows. While we can help with issues related to
                  GitHub.com, we aren't able to answer questions about
                  repositories that are hosted on GitHub. For assistance, check
                  the repository's README or SUPPORT file for an official
                  website or contact information. You can also open an issue on
                  the repository's issues tab, or get in touch with the
                  repository owner directly by checking their GitHub profile for
                  contact details.
                </p>
              </Modal>
            </li>
            <li>
              <a
                href="!#"
                onClick={(e) => {
                  setModal({ ...modal, error: true });
                  e.preventDefault();
                }}
              >
                I'm seeing a GitHub Pages error
              </a>
              <Modal
                title="GitHub Pages errors"
                visible={modal.error}
                onCancel={handleClose}
              >
                <p>
                  One of the most common problems GitHub Pages users run into is
                  not seeing changes that they've made to their site. After you
                  push a new commit to your repository, it can take up to 10
                  minutes for the GitHub Pages build process to complete and for
                  your changes to appear. If it's been over 10 minutes and your
                  changes still haven't appeared, your browser may be serving a
                  cached version of the page. To fix this, you can reset your
                  browser's cache or visit your site in an incognito or private
                  browsing window. For help with other Pages errors, please see
                  Troubleshooting GitHub Pages builds.
                </p>
              </Modal>
            </li>
            <li>
              <a
                href="!#"
                onClick={(e) => {
                  setModal({ ...modal, declined: true });
                  e.preventDefault();
                }}
              >
                My credit card was declined
              </a>
              <Modal
                title="Credit card declines"
                visible={modal.declined}
                onCancel={handleClose}
              >
                <p>
                  If your credit card was declined, please contact your credit
                  card company. GitHub does not have information about why your
                  card was declined.
                </p>
              </Modal>
            </li>
          </ul>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
        <div
          style={{
            fontWeight: '600',
            marginTop: '16px',
          }}
        >
          How can we help?
        </div>
        <div
          className="container"
          style={{
            width: '600px',
            height: '600px',
            padding: '5px',
            boxSizing: 'border-box',
            fontSize: '14px',
          }}
        >
          <ReactMde
            value={value}
            onChange={setValue}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(converter.makeHtml(markdown))
            }
            loadsuggestions={loadsuggestions}
            childProps={{
              writeButton: {
                tabIndex: -1,
              },
            }}
          />
          <div style={{ fontWeight: 'bold' }}>
            Attach files, screenshots, or logs
          </div>
          <Upload>
            <div style={{ paddingTop: '20px' }}>
              <Button>
                <UploadOutlined />
                Choose files
              </Button>
            </div>
          </Upload>
          <div style={{ paddingTop: '20px' }}>
            <Form.Item>
              <Button type="primary">Send Request</Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SupportPage;
