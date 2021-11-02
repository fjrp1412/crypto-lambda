import styled from 'styled-components';

const CoinCardUI = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  background: var(--card-positive-bg-color-dark-theme);
`;

const CoinCardDetailContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin-left: 10px;
  margin-top: 10px;
`;

const CoinCardText = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-font-color);

  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
  }
`;
const CoinCardSecondaryText = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: var(--secondary-font-color);
  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const CoinCardTendencyText = styled.span`
  font-size: 1.9rem;
  font-weight: bold;
  color: var(--positive-tendency-green);
  margin: 10px;
  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

const CoinCardName = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 3;
  margin-left: 10px;
`;

const CoinCardPrice = styled.div`
  grid-row: 2;
  grid-column: 1 / 4;
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
  CoinCardName,
  CoinCardTendencyText,
  CoinCardRank,
  CoinCardVolumen,
  CoinCardPrice,
  CoinCardSecondaryText,
};
