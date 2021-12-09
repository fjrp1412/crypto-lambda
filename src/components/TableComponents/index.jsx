import styled from 'styled-components';

const TableHead = styled.thead`
  background-color: #777777;
  color: white;

  & tr th button {
    text-align: center;
    font-size: 1.4rem;
    width: 100%;
    color: white;
    font-weight: bolder;
    height: 100%;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
  }

  & tr th {
    padding: 5px 10px;
  }
`;

const TableBody = styled.tbody`
  background-color: #024e58;
  color: white;

  & tr {
    height: 20px;
  }
`;

const Table = styled.table`
  width: 80%;
  min-width: 650px;
  background-color: #024e58;
  margin: 50px auto 0px;
  border-collapse: collapse;

  & thead tr td {
    color: white;
    font-size: 1.3rem;
  }

  & tbody tr td {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const TableItem = styled.tr`
  border: 8px solid black;
  border-right: 0px;
  border-left: 0px;
  margin: 5px;
`;

export { Table, TableHead, TableBody, TableItem };
