import React, { useState, useEffect } from 'react';
import SearchBox from '../../src/components/SearchBox';
import { useRouter } from 'next/router';
import axios from 'axios';
import Result from '../../src/components/Result';

const CompanySearch = () => {
  const router = useRouter();
  const { id } = router.query;

  const [jobs, setJobs] = useState([]);

  debugger;
  useEffect(() => {
    const loadFeatured = async () => {
      const result = await axios.get(`/api/positions?search=${id}`);
      setJobs(result.data);
    };
    loadFeatured();
  }, [id]);

  return (
    <>
      <SearchBox />
      <Result jobs={jobs} title={`Showing ${jobs.length} Jobs at ${id}`} />
    </>
  );
};

export default CompanySearch;
