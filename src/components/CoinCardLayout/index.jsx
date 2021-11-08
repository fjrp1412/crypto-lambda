import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CoinCard } from '../../containers/CoinCard';

const CoinCardLayotUI = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, minmax(300px, 100px));
  grid-auto-flow: row;
  grid-gap: 35px;
  justify-content: center;
  padding: 10px;

  @media screen and (max-width: 1350px) {
    grid-template-columns: repeat(3, minmax(300px, 130px));
  }

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

const CoinCardLayout = ({ coins }) => {
  return (
    <CoinCardLayotUI>
      {coins.map(coin => (
        <Link
          to={{
            pathname: `/detail/${coin.id}`,
            state: { id: coin.id },
          }}
          key={coin.id}
        >
          <CoinCard
            coin={coin.name}
            rank={coin.rank}
            symbol={coin.symbol}
            staticPrice={coin.priceUsd}
            tendency={coin.changePercent24Hr}
            volumen={coin.volumeUsd24Hr}
            id={coin.id}
          />
        </Link>
      ))}
    </CoinCardLayotUI>
  );
};

export { CoinCardLayout };
