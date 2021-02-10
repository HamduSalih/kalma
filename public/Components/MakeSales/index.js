import React from "react";
import styles from "./styles.module.css";
import NavBar from "../../Components/NavBar.js";
import SalesMade from "./Components/SalesMade";

const MakeSales = () => {
  return (
    <div className={styles.container}>
      <NavBar title="Sales Made" />
      <SalesMade />
    </div>
  );
};

export default MakeSales;
