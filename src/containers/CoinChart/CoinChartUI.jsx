import React from 'react';
import numeral from 'numeral';
import styled from 'styled-components';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { ChartOptionButton } from '../../components/Button';

const ChartContainer = styled.div`
  width: minmax(320px, 900px);
  height: 500px;
  margin-top: 50px;
`;

const ChartOptionsList = styled.div`
  display: flex;
  width: 300px;
  height: 30px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const CoinChartUI = ({ data, handleClick, change }) => {
  change = numeral(change / 100).format('% 0.0000');
  const stroke = change.includes('-') ? '#FF0000' : '#20EC29';
  const fill = change.includes('-') ? '#540202' : '#065402';
  const formatDateData = entry => {
    const date = new Date(entry.date);
    return `${date.getDate()}/${date.getMonth() + 1}`;
  };

  const formatePriceData = price => {
    return parseFloat(price.priceUsd, 10);
  };
  return (
    <>
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            width={200}
            height={60}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis dataKey={formatDateData} angle="-35" />
            <YAxis
              domain={[minValue => minValue, maxValue => Math.ceil(maxValue)]}
              orientation="right"
              dataKey={formatePriceData}
              allowDecimals
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey={formatePriceData}
              stroke={stroke}
              fill={fill}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
      <ChartOptionsList>
        <ChartOptionButton onClick={() => handleClick('d1')}>
          1D
        </ChartOptionButton>
        <ChartOptionButton onClick={() => handleClick('w1')}>
          1W
        </ChartOptionButton>
        <ChartOptionButton onClick={() => handleClick('m1')}>
          1M
        </ChartOptionButton>
        <ChartOptionButton onClick={() => handleClick('m2')}>
          2M
        </ChartOptionButton>
        <ChartOptionButton onClick={() => handleClick('m3')}>
          3M
        </ChartOptionButton>
        <ChartOptionButton onClick={() => handleClick('m6')}>
          6M
        </ChartOptionButton>
        <ChartOptionButton onClick={() => handleClick('y1')}>
          1Y
        </ChartOptionButton>
      </ChartOptionsList>
    </>
  );
};

export { CoinChartUI };
