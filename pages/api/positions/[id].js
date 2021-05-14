import ghApi from '../../../src/utils/githubJobsApi';

export default async (req, res) => {
  const result = await ghApi.get(`/positions/${req.query.id}.json`);
  res.status(200).json(result.data);
};
