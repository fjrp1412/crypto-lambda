const { API_KEY } = process.env;
const getCoinData = async ({ limit = 2000 }) => {
  const requestOptions = {
    method: 'GET',
    'Accept-Encoding': 'gzip',
    Authorization: `Bearer ${API_KEY}`,
  };
  const response = await fetch(
    `https://api.coincap.io/v2/assets?limit=${limit}`,
    requestOptions
  );
  const data = await response.json();
  return data.data;
};

export { getCoinData, API_KEY };
