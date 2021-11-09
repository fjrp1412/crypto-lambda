import React, { useState, useEffect } from 'react';
import { CoinChartUI } from './CoinChartUI';
import { getCoinHistory } from '../../utils/Api';
import { TimeConverter } from '../../utils/Dates';

const CoinChart = ({ id }) => {
  const [data, setData] = useState([]);
  const end = TimeConverter.millisecondsToDays(Date.now());
  const start = end - 365;

  useEffect(async () => {
    const history = await getCoinHistory({
      id,
      end: TimeConverter.daysToMilliseconds(end),
      start: TimeConverter.daysToMilliseconds(start),
    });

    setData(history);
  }, []);

  return <CoinChartUI data={data} />;
};

export { CoinChart };
