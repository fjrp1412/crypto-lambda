const { API_KEY } = process.env;
const REQUEST_OPTIONS = {
  mode: 'cors',
  method: 'GET',
  'Accept-Encoding': 'gzip',
  Authorization: `Bearer ${API_KEY}`,
  'Access-Control-Allow-Origin': '*',
};

const getCoinsData = async ({ limit = 2000 }) => {
  const response = await fetch(
    `https://api.coincap.io/v2/assets?limit=${limit}`,
    REQUEST_OPTIONS
  );
  const data = await response.json();
  return data.data;
};

const getCoinData = async ({ id }) => {
  const response = await fetch(
    `https://api.coincap.io/v2/assets/${id}`,
    REQUEST_OPTIONS
  );

  const data = await response.json();
  return data.data;
};

export { getCoinsData, getCoinData, API_KEY };
