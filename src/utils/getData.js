const getCoinData = async (limit = 2000) => {
  try {
    const response = await fetch(`api.coincap.io/v2/assets?limit=${limit}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getCoinData };
