import axios from 'axios';

const githubJobs = axios.create({
  baseURL: 'https://jobs.github.com',
});

export default githubJobs;
