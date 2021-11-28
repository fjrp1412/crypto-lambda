import styled from 'styled-components';

const TableHead = styled.thead`
  background-color: #777777;
  color: white;

  & tr th button {
    font-size: 1.8rem;
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
`;

const TableBody = styled.tbody`
  background-color: #024e58;
  color: white;

  & tr {
    height: 20px;
  }
`;

const Table = styled.table`
  width: 100%;
  background-color: #024e58;
  margin-top: 50px;
  border-collapse: collapse;

  & tr td {
    color: white;
    font-size: 1.8rem;
    text-align: center;
  }
`;

const TableItem = styled.tr`
  border: 5px solid black;
  border-right: 0px;
  border-left: 0px;
  margin: 5px;
`;

export { Table, TableHead, TableBody, TableItem };
