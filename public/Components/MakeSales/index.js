import React from "react";
import styles from "./styles.module.css";
import NavBar from "../../Components/NavBar.js";

const MakeSales = () => {
  return (
    <div className={styles.container}>
      <NavBar title="Sales Made" />
    </div>
  );
};

export default MakeSales;
