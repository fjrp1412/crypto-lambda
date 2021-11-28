import React from 'react';
import { CoinInfoUI } from './CoinInfolUI';
import { CoinChart } from '../CoinChart';

import {
  Table,
  TableItem,
  TableBody,
  TableHead,
} from '../../components/TableComponents';

const CoinDetailUI = ({
  id,
  symbol,
  change,
  high,
  low,
  average,
  history,
  setHistory,
}) => {
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

      <div className="container">
        <Table>
          <TableHead>
            <tr>
              <th>
                <button type="button">Rank</button>
              </th>
              <th>
                <button type="button">Name</button>
              </th>

              <th>
                <button type="button">Trading Pairs</button>
              </th>

              <th>
                <button type="button">Top Pairs</button>
              </th>

              <th>
                <button type="button">Volume(24Hr)</button>
              </th>

              <th>
                <button type="button">Total(%)</button>
              </th>
            </tr>
          </TableHead>
          <TableBody>
            <TableItem>
              <td>1</td>
              <td>Binance</td>
              <td>965</td>
              <td>BTC/USDT</td>
              <td>$19.45b</td>
              <td>30.69</td>
            </TableItem>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export { CoinDetailUI };
