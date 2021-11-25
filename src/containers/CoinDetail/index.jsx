import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { getCoinData, getCoinHistory } from '../../utils/Api';
import { TimeConverter } from '../../utils/Dates';
import { CoinInfoUI } from './CoinInfolUI';
import { CoinChart } from '../CoinChart';

const CardDetail = () => {
  const [history, setHistory] = useState([]);
  const location = useLocation();
  const { id, symbol } = location.state;
  const [high, setHigh] = useState();
  const [low, setLow] = useState();
  const [average, setAverage] = useState();
  const [change, setChange] = useState();

  useEffect(async () => {
    const end = TimeConverter.millisecondsToDays(Date.now());
    const start = end - 1;
    setHistory(
      await getCoinHistory({
        id,
        end: TimeConverter.daysToMilliseconds(end),
        start: TimeConverter.daysToMilliseconds(start),
        interval: 'm1',
      })
    );
  }, []);

  useEffect(() => {
    const prices = history.map(entry => entry.priceUsd);
    setHigh(Math.max(...prices));
    setLow(Math.min(...prices));

    setAverage(
      history.reduce((a, b) => a + parseFloat(b.priceUsd), 0) / history.length
    );
    setChange((prices[history.length - 1] / prices[0] - 1) * 100);
  }, [history]);

  return (
    <>
      <div className="container">
        <CoinInfoUI
          name={id}
          symbol={symbol}
          change={change}
          high={high}
          low={low}
          average={average}
        />
      </div>

      <div className="container">
        <CoinChart
          id={id}
          history={history}
          setHistory={setHistory}
          change={change}
        />
      </div>
    </>
  );
};

export { CardDetail };
