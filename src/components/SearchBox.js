import React from 'react';
import { Input } from 'antd';
import { Button, Checkbox, Row, Col } from 'antd';
import './App.css';

const SearchBox = ({ onSearch, desc, setDesc, loc, setLoc, setFullTime }) => {
  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleLocChange = (event) => {
    setLoc(event.target.value);
  };

  const handleDescKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  const handleLocKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <Row gutter={[24, 12]} style={{ padding: '16px 20px' }}>
      <Col xs={24} sm={12} md={8} className="searchbox-div">
        <span>Job Description</span>
        <Input
          className="search-input"
          value={desc}
          onChange={handleDescChange}
          onKeyDown={handleDescKeyDown}
          placeholder="Filter by title, benefits, companies, expertise"
        />
      </Col>
      <Col xs={24} sm={12} md={8} className="searchbox-div">
        <span>Location</span>
        <Input
          className="search-input"
          value={loc}
          onChange={handleLocChange}
          onKeyDown={handleLocKeyDown}
          placeholder="Filter by city, state, zip code, or country"
        />
      </Col>
      <Col xs={16} sm={12} md={3} className="checkbox">
        <Checkbox
          onChange={(event) => {
            setFullTime(event.target.checked);
          }}
        >
          Full Time Only
        </Checkbox>
      </Col>
      <Col xs={8} sm={12} md={5} className="search-button">
        <Button type="primary" onClick={onSearch}>
          Search
        </Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
