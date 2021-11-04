import React, { useState, useEffect, useRef } from 'react';
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

const CoinCard = ({
  coin,
  symbol,
  rank,
  staticPrice,
  tendency,
  volumen,
  id,
}) => {
  const [price, setPrice] = useState(staticPrice);
  const [tendencyRate, setTendency] = useState('');
  const [priceText, setPriceText] = useState(
    numeral(staticPrice).format('$ 0.000a')
  );
  const coinWs = useRef(null);
  tendency = numeral(tendency / 100).format('% 0.000');
  volumen = numeral(volumen).format('0.000a');

  useEffect(() => {
    coinWs.current = new WebSocket(`wss://ws.coincap.io/prices?assets=${id}`);
    const currentWs = coinWs.current;
    return () => {
      currentWs.close();
    };
  }, []);

  useEffect(() => {
    coinWs.current.onmessage = message => {
      const data = JSON.parse(message.data);
      setTendency(data[id] > price ? 'tendencyUp' : 'tendencyDown');
      setPrice(data[id]);
      setPriceText(numeral(price).format('$ 0.000a'));
    };
  });

  return (
    <CoinCardUI theme={tendencyRate}>
      <CoinCardDetailContainer>
        <CoinCardName>
          <CoinCardText>{coin}</CoinCardText>

          <CoinCardText>{`(${symbol})`}</CoinCardText>
        </CoinCardName>

        <CoinCardRank>
          <CoinCardTendencyText
            theme={
              tendency.includes('-')
                ? 'var(--negative-tendency-red)'
                : 'var(--positive-tendency-green)'
            }
            className="rank"
          >
            #{rank}
          </CoinCardTendencyText>
        </CoinCardRank>

        <CoinCardPrice>
          <CoinCardText>
            {priceText}
            <CoinCardTendencyText
              theme={
                tendency.includes('-')
                  ? 'var(--negative-tendency-red)'
                  : 'var(--positive-tendency-green)'
              }
            >
              {tendency} (24hr)
            </CoinCardTendencyText>
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
