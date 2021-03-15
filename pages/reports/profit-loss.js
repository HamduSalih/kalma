import React from "react";
import Head from "next/head";
import styles from "../../styles/Sales.module.css";
import TopNavigation from "../../public/Components/TopNavigation";
import SideBar from "../../public/Components/SideBar.js";
import ProfitNLoss from "../../public/Components/ProfitNLoss";

const ProfitLoss = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Profit/Loss</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <TopNavigation />
      <div className={styles.bodyContent}>
        <SideBar />
        <ProfitNLoss />
      </div>
    </div>
  );
};

export default ProfitLoss
