import React, { useState, useEffect } from 'react';
import Result from './Result';
import SearchBox from './SearchBox';
import githubJobs from '../api/githubJobs';

const MainPage = () => {
  const [desc, setDesc] = useState('');
  const [loc, setLoc] = useState('');
  const [jobs, setJobs] = useState([]);
  const [fullTime, setFullTime] = useState(false);

  useEffect(() => {
    const loadFeatured = async () => {
      const result = await githubJobs.get(`/positions.json?search=github`);
      setJobs(result.data.slice(0, 3));
    };
    loadFeatured();
  }, []);

  const onSearch = async () => {
    const result = await githubJobs.get(
      `/positions.json?search=${desc}&location=${loc}&full_time=${fullTime}`
    );
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
