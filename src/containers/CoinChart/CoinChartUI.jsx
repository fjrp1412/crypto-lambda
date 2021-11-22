import React from 'react';
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
  height: 460px;
  margin-top: 50px;
`;

const ChartOptionsList = styled.div`
  display: flex;
  width: 320px;
  height: 30px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const CoinChartUI = ({ data, handleClick }) => {
  const formatDateData = entry => {
    const date = new Date(entry.date);
    return `${date.getDate()}/${date.getMonth() + 1}`;
  };
  return (
    <>
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey={formatDateData} angle="-35" />
            <YAxis
              type="number"
              domain={[
                dataMin => Math.round(dataMin),
                dataMax => Math.round(dataMax),
              ]}
              orientation="right"
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="priceUsd"
              stroke="#89D6FB"
              fill="#11639e"
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
