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

const getCoinHistory = async ({ id, interval = 'd1', start, end }) => {
  const response = await fetch(
    `https://api.coincap.io/v2/assets/${id}/history?interval=${interval}&start=${start}&end=${end}`,
    REQUEST_OPTIONS
  );

  const data = await response.json();

  return data.data;
};

const getMarketsData = async () => {
  const response = await fetch(
    'https://api.coincap.io/v2/markets',
    REQUEST_OPTIONS
  );

  const data = await response.json();
  console.log(data);
  console.log(response);
};

const getMarketsCoinData = async ({ id }) => {
  const response = await fetch(
    `https://api.coincap.io/v2/markets?baseId=${id}`,
    REQUEST_OPTIONS
  );

  const data = await response.json();
  return data.data;
};

export {
  getCoinsData,
  getCoinData,
  getCoinHistory,
  getMarketsData,
  getMarketsCoinData,
};
