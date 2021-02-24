import React from "react";
import styles from "./styles.module.css";
import Table from "../Table";
import Link from "next/link";

const Unpaid = (props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Mode",
        accessor: "mode",
      },
      {
        Header: "Customer Name",
        accessor: "customer",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        date: "7th Feb",
        amount: "4000",
        mode: "cheque",
        customer: "Abibatu Abiabata",
        status: "Paid",
      },
      {
        date: "7th Feb",
        amount: "4000",
        mode: "cheque",
        customer: "Abibatu Abiabata",
        status: "Paid",
      },
      {
        date: "7th Feb",
        amount: "4000",
        mode: "cheque",
        customer: "Abibatu Abiabata",
        status: "Paid",
      },
      {
        date: "7th Feb",
        amount: "4000",
        mode: "cheque",
        customer: "Abibatu Abiabata",
        status: "Paid",
      },
      {
        date: "7th Feb",
        amount: "4000",
        mode: "cheque",
        customer: "Abibatu Abiabata",
        status: "Paid",
      },
      {
        date: "7th Feb",
        amount: "4000",
        mode: "cheque",
        customer: "Abibatu Abiabata",
        status: "Paid",
      },
    ],
    []
  );
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Unpaid Expenses</h4>
      <div className={styles.tableDiv}>
        <Table columns={columns} data={data} />
      </div>
      <div className={styles.saveDiv}>
        <input className="globalButton" type="button" value="Save" />
        <input className="globalButtonCancel" type="button" value="Cancel" />
      </div>
    </div>
  );
};

export default Unpaid;
