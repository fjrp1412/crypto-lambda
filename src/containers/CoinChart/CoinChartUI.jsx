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

const ChartContainer = styled.div`
  width: minmax(320px, 900px);
  height: 460px;
  margin-top: 50px;
`;

const CoinChartUI = ({ data }) => {
  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} height={420} width={500}>
          <XAxis />
          <YAxis />
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
  );
};

export { CoinChartUI };
