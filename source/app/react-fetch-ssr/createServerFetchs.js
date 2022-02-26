const createServerFetchs = () => {
  const fetchs = [];

  const registerFetch = (fetcher) => {
    fetchs.push(fetcher);
  };

  const executeAll = async () => {
    await Promise.all(fetchs.map((currentFetch) => currentFetch()));
  };

  const getFetchs = () => fetchs;

  return {
    registerFetch,
    executeAll,
    getFetchs,
  };
};

export default createServerFetchs;
