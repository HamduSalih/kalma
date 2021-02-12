import React from "react";
import TopNavigation from "../../public/Components/TopNavigation";
import SideBar from "../../public/Components/SideBar.js";
import AddSales from "../../public/Components/AddSale";
import Head from "next/head";
import styles from "../../styles/Sales.module.css";

const AddSale = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sales | Add Sale</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <TopNavigation />
      <div className={styles.bodyContent}>
        <SideBar />
        <AddSales />
      </div>
    </div>
  );
};

export default AddSale;
