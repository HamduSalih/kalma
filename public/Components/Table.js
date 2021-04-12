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

const ProfitStyled = styled.div`
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
    text-align: left;
  }

  td {
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: left;
  }

  table > tbody > tr:nth-child(even) > td {
    margin: 0;
    border-bottom: 1px solid #0000ff88;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: left;
  }
`;

const Table = (props) => {
  const columns = React.useMemo(() => props.columns, []);
  const data = React.useMemo(() => props.data, []);
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

const ProfitTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Account",
        accessor: "account",
      },
      {
        Header: "",
        accessor: "middle",
      },
      {
        Header: "Total",
        accessor: "total",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        account: "Total Income(Operation)",
        middle: "",
        total: "2000",
      },
      {
        account: "Total Goods Sold",
        middle: "",
        total: "6000",
      },
      {
        account: "Total Expense (Operating)",
        middle: "",
        total: "8000",
      },
      {
        account: "Total Expense (Non Operating)",
        middle: "",
        total: "8000",
      },
      {
        account: "Total Expense (Operating)",
        middle: "",
        total: "8000",
      },
      {
        account: "",
        middle: "Net Profit/Loss",
        total: "8000",
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <ProfitStyled>
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
    </ProfitStyled>
  );
};

export default Table;
export { ProfitTable };
