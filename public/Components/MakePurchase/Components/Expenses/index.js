import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { IconContext } from "react-icons";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import Table from "../../../../Components/Table";

const Expenses = () => {
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
      <div className={styles.button}>
        <Link href="/purchases/add-expense">
          <a>
            <IconContext.Provider value={{ size: "30px", color: "#fff" }}>
              <AiOutlineAppstoreAdd />
            </IconContext.Provider>
          </a>
        </Link>
      </div>
      <div>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Expenses;
