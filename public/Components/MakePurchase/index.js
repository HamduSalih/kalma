import React from "react";
import styles from "./styles.module.css";
import NavBar from "../../Components/NavBar.js";
import Expenses from "./Components/Expenses";

const MakePurchase = () => {
  return (
    <div className={styles.container}>
      <NavBar title="Expenses" />
      <Expenses />
    </div>
  );
};

export default MakePurchase;
