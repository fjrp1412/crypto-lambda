import React, { useEffect, useState } from 'react';
import { getCoinsData } from '../../utils/Api';
import { CoinCardLayout } from '../../components/CoinCardLayout';

const Home = () => {
  const [coins, setCoins] = useState([]);

  useEffect(async () => {
    setCoins(await getCoinsData());
  }, []);

  return (
    <>
      <CoinCardLayout coins={coins} />
    </>
  );
};

export { Home };
