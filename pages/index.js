import React, { useState, useEffect } from 'react';
import Result from '../src/components/Result';
import SearchBox from '../src/components/SearchBox';
import axios from 'axios';

const MainPage = () => {
  const [desc, setDesc] = useState('');
  const [loc, setLoc] = useState('');
  const [jobs, setJobs] = useState([]);
  const [fullTime, setFullTime] = useState(false);

  useEffect(() => {
    const loadFeatured = async () => {
      const result = await axios.get(`/api/positions?search=github`);
      console.log(result);
      setJobs(result.data.slice(0, 3));
    };
    loadFeatured();
  }, []);

  const onSearch = async () => {
    const result = await axios.get(
      `/api/positions?search=${desc}&location=${loc}&full_time=${fullTime}`
    );
    console.log(result);
    setJobs(result.data);
  };

  return (
    <>
      <SearchBox
        className="search-div"
        setFullTime={setFullTime}
        onSearch={onSearch}
        desc={desc}
        setDesc={setDesc}
        loc={loc}
        setLoc={setLoc}
        jobs={jobs}
        setJobs={setJobs}
      />
      <Result jobs={jobs} title="All Jobs" />
    </>
  );
};

export default MainPage;
