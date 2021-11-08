import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { getCoinData } from '../../utils/Api';

const CardDetail = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  const { id } = location.state;
  useEffect(async () => {
    setData(await getCoinData({ id }));
  }, []);

  return <h1 color="white">Hola mundo</h1>;
};

export { CardDetail };
