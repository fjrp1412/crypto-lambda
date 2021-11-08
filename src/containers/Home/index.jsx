import React, { useEffect, useState } from 'react';
import { Title } from '../../components/Title';
import { getCoinsData } from '../../utils/Api';
import { CoinCardLayout } from '../../components/CoinCardLayout';

const Home = () => {
  const [coins, setCoins] = useState([]);

  useEffect(async () => {
    setCoins(await getCoinsData({ limit: 40 }));
  }, []);

  return (
    <>
      <Title text="Top 40 Crypto Assets" />
      <CoinCardLayout coins={coins} />
    </>
  );
};

export { Home };
