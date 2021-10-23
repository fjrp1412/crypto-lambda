import React from 'react';
import { getData } from '../../utils/getData';
import {
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
} from './CoinCardUI';

const CoinCard = () => {
  return (
    <CoinCardUI>
      <CoinCardDetailContainer>
        <CoinCardName>
          <CoinCardText>Bitcoin (BTC)</CoinCardText>
        </CoinCardName>

        <CoinCardRank>
          <CoinCardTendencyText className="rank">#1</CoinCardTendencyText>
        </CoinCardRank>

        <CoinCardPrice>
          <CoinCardText>
            61462.2
            <CoinCardTendencyText>+1.15%</CoinCardTendencyText>
          </CoinCardText>
        </CoinCardPrice>

        <CoinCardVolumen>
          <CoinCardSecondaryText>
            Volumen
            <CoinCardText> 16.27B</CoinCardText>
          </CoinCardSecondaryText>
        </CoinCardVolumen>
      </CoinCardDetailContainer>
      <CoinChartContainer />
    </CoinCardUI>
  );
};

export { CoinCard };
