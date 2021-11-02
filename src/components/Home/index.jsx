import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Title } from '../Title';
import { CoinCard } from '../../containers/CoinCard';
import { getCoinData } from '../../utils/Api';

const HomeUI = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, minmax(300px, 100px));
  grid-auto-flow: row;
  grid-gap: 15px;
  justify-content: center;
  padding: 10px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(300px, 130px));
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, minmax(300px, 130px));
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(1, minmax(200px, 130px));
  }
`;

const Home = () => {
  const [coins, setCoins] = useState([]);

  useEffect(async () => {
    setCoins(await getCoinData({ limit: 30 }));
  }, []);

  return (
    <>
      <Title text="Top Crypto Assets" />
      <HomeUI>
        {coins.map(coin => (
          <CoinCard
            coin={coin.name}
            rank={coin.rank}
            symbol={coin.symbol}
            price={coin.priceUsd}
            tendency={coin.changePercent24Hr}
            volumen={coin.volumeUsd24Hr}
            key={coin.id}
          />
        ))}
      </HomeUI>
    </>
  );
};

export { Home };
