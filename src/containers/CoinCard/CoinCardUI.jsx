import styled from 'styled-components';

const CoinCardUI = styled.div`
  width: 100%;
  height: 295px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--card-positive-bg-color-dark-theme);
`;

const CoinCardDetailContainer = styled.div`
  display: grid;
  height: 133px;
  width: 100%;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin-left: 10px;
`;

const CoinCardText = styled.span`
  font-size: 2.2rem;
  font-weight: bold;
  color: var(--primary-font-color);
`;
const CoinCardSecondaryText = styled.span`
  font-size: 2.2rem;
  font-weight: bold;
  color: var(--secondary-font-color);
`;

const CoinCardTendencyText = styled.span`
  font-size: 1.9rem;
  font-weight: bold;
  color: var(--positive-tendency-green);
  margin: 10px;
`;

const CoinChartContainer = styled.div`
  width: 100%;
  height: 193px;
`;

const CoinCardName = styled.div`
  grid-column: 1 / 3;
  margin-left: 10px;
`;

const CoinCardPrice = styled.div`
  grid-row: 2;
  grid-column: 1 / 3;
  margin-left: 10px;
`;

const CoinCardRank = styled.div`
  grid-row: 1;
  grid-column: 3 / -1;
  justify-self: end;
  margin-right: 10px;
`;

const CoinCardVolumen = styled.div`
  grid-row: 3;
  grid-column: 1 / 3;
  margin-left: 10px;
`;

export {
  CoinCardUI,
  CoinCardDetailContainer,
  CoinCardText,
  CoinChartContainer,
  CoinCardName,
  CoinCardTendencyText,
  CoinCardRank,
  CoinCardVolumen,
  CoinCardPrice,
  CoinCardSecondaryText,
};
