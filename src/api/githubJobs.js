import axios from 'axios';

const githubJobs = axios.create({
  baseURL: 'http://localhost:8010/proxy',
});

export default githubJobs;
