import React, { useState, useEffect } from 'react';
import numeral from 'numeral';
import { useSortableData } from '../../hooks/useSortTable';
import {
  Table,
  TableItem,
  TableBody,
  TableHead,
} from '../../components/TableComponents';
import { getExchangesData } from '../../utils/Api';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const { items, requestSort } = useSortableData([...exchanges]);
  useEffect(async () => {
    setExchanges(await getExchangesData());
  }, []);

  return (
    <div className="container">
      <Table>
        <TableHead>
          <tr>
            <th>
              <button type="button" onClick={() => requestSort('rank')}>
                Rank
              </button>
            </th>

            <th>
              <button type="button" onClick={() => requestSort('exchangeId')}>
                Exchange
              </button>
            </th>
            <th>
              <button type="button" onClick={() => requestSort('tradingPairs')}>
                Trading Pairs
              </button>
            </th>

            <th>
              <button type="button" onClick={() => requestSort('volumeUsd')}>
                Volume(24Hr)
              </button>
            </th>

            <th>
              <button
                type="button"
                onClick={() => requestSort('percentTotalVolume')}
              >
                Total(%)
              </button>
            </th>

            <th>
              <button type="button">Url</button>
            </th>
          </tr>
        </TableHead>
        <TableBody>
          {items.map(exchange => (
            <TableItem key={exchange.exchangeId}>
              <td>{exchange.rank}</td>
              <td>{exchange.name}</td>
              <td>{exchange.tradingPairs}</td>
              <td>{numeral(exchange.volumeUsd).format('$ 0.000a')}</td>
              <td>
                {numeral(exchange.percentTotalVolume / 100).format('% 0.0000')}
              </td>

              <td>{exchange.exchangeUrl}</td>
            </TableItem>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export { Exchanges };
