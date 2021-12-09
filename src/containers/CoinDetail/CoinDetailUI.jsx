import React, { useState, useEffect } from 'react';
import numeral from 'numeral';
import { CoinInfoUI } from './CoinInfolUI';
import { CoinChart } from '../CoinChart';
import { useSortableData } from '../../hooks/useSortTable';

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
  const [marketsWithId, setMarketsWithId] = useState([]);
  useEffect(() => {
    setMarketsWithId(
      markets.map((market, index) => ({
        ...market,
        id: index,
      }))
    );
  }, [markets]);
  const { items, requestSort } = useSortableData([...marketsWithId]);

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
                <button
                  type="button"
                  onClick={() => requestSort('quoteSymbol')}
                >
                  Pair
                </button>
              </th>

              <th>
                <button type="button" onClick={() => requestSort('priceUsd')}>
                  Price
                </button>
              </th>

              <th>
                <button
                  type="button"
                  onClick={() => requestSort('volumeUsd24Hr')}
                >
                  Volume(24Hr)
                </button>
              </th>

              <th>
                <button
                  type="button"
                  onClick={() => requestSort('percentExchangeVolume')}
                >
                  Volume(%)
                </button>
              </th>
            </tr>
          </TableHead>
          <TableBody>
            {items.map(market => (
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
