import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { getCoinData } from '../../utils/Api';
import { CoinInfoUI } from './CoinInfolUI';

const CardDetail = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  const { id } = location.state;
  useEffect(async () => {
    setData(await getCoinData({ id }));
  }, []);

  const { name, priceUsd, symbol, supply, volumeUsd24Hr, changePercent24Hr } =
    data;

  return (
    <CoinInfoUI
      name={name}
      price={priceUsd}
      symbol={symbol}
      supply={supply}
      volumen={volumeUsd24Hr}
      change={changePercent24Hr}
      id={id}
    />
  );
};

export { CardDetail };
