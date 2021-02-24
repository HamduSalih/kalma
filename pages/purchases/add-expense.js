import React from "react";
import TopNavigation from "../../public/Components/TopNavigation";
import SideBar from "../../public/Components/SideBar.js";
import AddExpense from "../../public/Components/AddExpense";
import Unpaid from "../../public/Components/UnpaidExpenses";
import Head from "next/head";
import styles from "../../styles/Sales.module.css";

const AddExpenses = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sales | Add Sale</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <TopNavigation />
      <div className={styles.bodyContent}>
        <SideBar />
        <AddExpense />
        <Unpaid />
      </div>
    </div>
  );
};

export default AddExpenses;
