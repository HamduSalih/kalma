import React from "react";
import TopNavigation from "../../public/Components/TopNavigation";
import SideBar from "../../public/Components/SideBar.js";
import MakeSales from "../../public/Components/MakeSales";
import Head from "next/head";
import styles from "../../styles/Sales.module.css";

const Sales = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sales | Make Sale</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <TopNavigation />
      <div className={styles.bodyContent}>
        <SideBar />
        <MakeSales />
      </div>
    </div>
  );
};

export default Sales;
