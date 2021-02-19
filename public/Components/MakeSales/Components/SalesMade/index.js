import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { IconContext } from "react-icons";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import Table from "../../../../Components/Table";

const SalesMade = () => {
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
        Header: "Mode",
        accessor: "mode",
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
      <div className={styles.button}>
        <Link href="/sales/add-sale">
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

export default SalesMade;
