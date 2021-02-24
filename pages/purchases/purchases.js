import React from "react";
import TopNavigation from "../../public/Components/TopNavigation";
import SideBar from "../../public/Components/SideBar.js";
import MakePurchase from "../../public/Components/MakePurchase";
import Head from "next/head";
import styles from "../../styles/Sales.module.css";

const Sales = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Purchases | Make Purchase</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <TopNavigation />
      <div className={styles.bodyContent}>
        <SideBar />
        <MakePurchase />
      </div>
    </div>
  );
};

export default Sales;
