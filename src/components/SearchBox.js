import React, { useState } from 'react';
import { Input } from 'antd';
import './App.css';

const SearchBox = ({ onSearch, desc, setDesc, loc, setLoc }) => {
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
    <>
      <div className="searchbox-div">
        Job Description
        <Input
          className="search-input"
          value={desc}
          onChange={handleDescChange}
          onKeyDown={handleDescKeyDown}
          placeholder="Filter by title, benefits, companies, expertise"
        />
      </div>
      <div className="searchbox-div">
        Location
        <Input
          className="search-input"
          value={loc}
          onChange={handleLocChange}
          onKeyDown={handleLocKeyDown}
          placeholder="Filter by city, state, zip code, or country"
        />
      </div>
    </>
  );
};

export default SearchBox;
