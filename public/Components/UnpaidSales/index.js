import React from "react";
import styles from "./styles.module.css";
import Table from "../Table";
import Link from "next/link";

const Unpaid = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Customer",
        accessor: "customer",
      },
      {
        Header: "Item",
        accessor: "item",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        date: "7th Feb",
        customer: "Abibatu Abiabata",
        item: "Saudi Abaya",
        mode: "cheque",
        amount: "4000",
      },
      {
        date: "7th Feb",
        customer: "Abibatu Abiabata",
        item: "Saudi Abaya",
        mode: "cheque",
        amount: "4000",
      },
      {
        date: "7th Feb",
        customer: "Abibatu Abiabata",
        item: "Saudi Abaya",
        mode: "cheque",
        amount: "4000",
      },
      {
        date: "7th Feb",
        customer: "Abibatu Abiabata",
        item: "Saudi Abaya",
        mode: "cheque",
        amount: "4000",
      },
      {
        date: "7th Feb",
        customer: "Abibatu Abiabata",
        item: "Saudi Abaya",
        mode: "cheque",
        amount: "4000",
      },
    ],
    []
  );
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Unpaid Sales</h4>
      <div className={styles.tableDiv}>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Unpaid;
