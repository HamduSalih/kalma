import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { IconContext } from "react-icons";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import Table from "./Table";

const SalesMade = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <Link href="#">
          <a>
            <IconContext.Provider value={{ size: "30px", color: "#fff" }}>
              <AiOutlineAppstoreAdd />
            </IconContext.Provider>
          </a>
        </Link>
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default SalesMade;
