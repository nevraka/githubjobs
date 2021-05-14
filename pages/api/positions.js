import ghApi from '../../src/utils/githubJobsApi';

export default async (req, res) => {
  const result = await ghApi.get(`/positions.json`, {
    params: {
      search: req.query.search,
      location: req.query.location,
      full_time: req.query.full_time,
    },
  });
  res.status(200).json(result.data);
};
