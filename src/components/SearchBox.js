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
    <Row style={{ width: '100%' }}>
      <Col span={8} className="searchbox-div">
        Job Description
        <Input
          className="search-input"
          value={desc}
          onChange={handleDescChange}
          onKeyDown={handleDescKeyDown}
          placeholder="Filter by title, benefits, companies, expertise"
        />
      </Col>
      <Col span={8} className="searchbox-div">
        Location
        <Input
          className="search-input"
          value={loc}
          onChange={handleLocChange}
          onKeyDown={handleLocKeyDown}
          placeholder="Filter by city, state, zip code, or country"
        />
      </Col>
      <Col span={3} className="checkbox">
        <Checkbox
          onChange={(event) => {
            setFullTime(event.target.checked);
          }}
        />
        Full Time Only
      </Col>
      <Col span={5} className="search-button">
        <Button type="primary" onClick={onSearch}>
          Search
        </Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
