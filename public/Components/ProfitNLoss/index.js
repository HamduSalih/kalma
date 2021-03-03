import React from "react";
import styles from "./styles.module.css";
import { ReportsNav } from "../../Components/NavBar.js";
import Headings from "./Components/Headings";
import {ProfitTable} from "../../Components/Table";

const ProfitNLoss = () => {
  return (
    <div className={styles.container}>
      <ReportsNav title="Profit and Loss" />
      <div className={styles.printableArea}>
        <Headings />
        <ProfitTable />
      </div>
    </div>
  );
};

export default ProfitNLoss;
