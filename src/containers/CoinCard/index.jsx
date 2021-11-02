import React from 'react';
import numeral from 'numeral';
import {
  CoinCardUI,
  CoinCardDetailContainer,
  CoinCardText,
  CoinCardName,
  CoinCardTendencyText,
  CoinCardRank,
  CoinCardVolumen,
  CoinCardPrice,
  CoinCardSecondaryText,
} from './CoinCardUI';

const CoinCard = ({ coin, symbol, rank, price, tendency, volumen }) => {
  price = numeral(price).format('$ 0.000a');
  tendency = numeral(tendency / 100).format('% 0.000');
  volumen = numeral(volumen).format('0.000a');
  return (
    <CoinCardUI>
      <CoinCardDetailContainer>
        <CoinCardName>
          <CoinCardText>{coin}</CoinCardText>

          <CoinCardText>{`(${symbol})`}</CoinCardText>
        </CoinCardName>

        <CoinCardRank>
          <CoinCardTendencyText className="rank">#{rank}</CoinCardTendencyText>
        </CoinCardRank>

        <CoinCardPrice>
          <CoinCardText>
            {price}
            <CoinCardTendencyText>{tendency}</CoinCardTendencyText>
          </CoinCardText>
        </CoinCardPrice>

        <CoinCardVolumen>
          <CoinCardSecondaryText>
            Volumen
            <CoinCardText> {volumen}</CoinCardText>
          </CoinCardSecondaryText>
        </CoinCardVolumen>
      </CoinCardDetailContainer>
    </CoinCardUI>
  );
};

export { CoinCard };
