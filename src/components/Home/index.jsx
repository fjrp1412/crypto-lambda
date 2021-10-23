import React from 'react';
import styled from 'styled-components';
import { Title } from '../Title';
import { CoinCard } from '../../containers/CoinCard';

const HomeUI = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, minmax(300px, 405px));
  grid-auto-flow: row;
  grid-gap: 55px;
  justify-content: center;
`;

const Home = ({ children }) => {
  return (
    <>
      <Title text="Top Crypto Assets" />
      <HomeUI>
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
      </HomeUI>
    </>
  );
};

export { Home };
