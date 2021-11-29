import React, { useState, useEffect } from 'react';
import numeral from 'numeral';
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
  markets,
}) => {
  const [sortConfig, setSortConfig] = useState({});
  const [sortedMarkets, setSortMarkets] = useState([]);

  useEffect(() => {
    setSortMarkets(markets.map((market, index) => ({ ...market, id: index })));
  }, [markets]);

  const sortItems = () => {
    setSortMarkets(
      sortedMarkets.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }

        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'descending' ? 1 : -1;
        }

        return 0;
      })
    );
  };

  const requestSort = key => {
    let direction = 'ascending';

    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    sortItems();
    console.log(sortConfig);
  };

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
                <button type="button" onClick={() => requestSort('exchangeId')}>
                  Exchange
                </button>
              </th>
              <th>
                <button type="button">Pair</button>
              </th>

              <th>
                <button type="button">Price</button>
              </th>

              <th>
                <button type="button">Volume(24Hr)</button>
              </th>

              <th>
                <button type="button">Volume(%)</button>
              </th>
            </tr>
          </TableHead>
          <TableBody>
            {sortedMarkets.map(market => (
              <TableItem key={market.id}>
                <td>{market.exchangeId}</td>
                <td>
                  {market.baseSymbol}/{market.quoteSymbol}
                </td>
                <td>{numeral(market.priceUsd).format('$ 0.000a')}</td>
                <td>{numeral(market.volumeUsd24Hr).format('$ 0.000a')}</td>
                <td>
                  {numeral(market.percentExchangeVolume / 100).format(
                    '% 0.0000'
                  )}
                </td>
              </TableItem>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export { CoinDetailUI };
