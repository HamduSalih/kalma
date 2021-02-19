import React from "react";
import { useTable } from "react-table";
import styled from "styled-components";

const Styled = styled.div`
  width: 100%;
  table {
    width: 100%;
    border-spacing: 0;
  }

  table > thead > tr > th {
    margin: 0;
    border-bottom: 2px solid #0000ff88;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  td {
    margin: 0;
    border-bottom: 1px solid #0000ff88;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
`;

const Table = (props) => {
  const columns = props.columns;
  const data = props.data;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });
  return (
    <Styled>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styled>
  );
};

export default Table;
