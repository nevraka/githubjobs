import React, { useState } from 'react';
import { Input } from 'antd';

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
      Job Description
      <Input
        value={desc}
        onChange={handleDescChange}
        onKeyDown={handleDescKeyDown}
        placeholder="Filter by title, benefits, companies, expertise"
      />
      Location
      <Input
        value={loc}
        onChange={handleLocChange}
        onKeyDown={handleLocKeyDown}
        placeholder="Filter by city, state, zip code, or country"
      />
    </>
  );
};

export default SearchBox;
