import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import { useParams } from 'react-router-dom';
import githubJobs from '../api/githubJobs';
import Result from './Result';

const CompanySearch = () => {
  let { company = '' } = useParams();
  company = company.split(' ')[0];

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const loadFeatured = async () => {
      const result = await githubJobs.get(`/positions.json?search=${company}`);
      setJobs(result.data);
    };
    loadFeatured();
  }, [company]);

  return (
    <>
      <SearchBox />
      <Result jobs={jobs} title={`Showing ${jobs.length} Jobs at ${company}`} />
    </>
  );
};

export default CompanySearch;
