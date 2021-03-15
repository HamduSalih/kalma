import React from "react";
import styles from "../../styles/NavBar.module.css";
import Link from "next/link";
import { IconContext } from "react-icons";
import { AiOutlinePrinter } from "react-icons/ai";
import { ToastContainer, toast } from "react-nextjs-toast";

export default function NavBar(props) {
  return (
    <div className={styles.container}>
      <div>
        <h4 className={styles.heading}>{props.title}</h4>
      </div>
      <div>
        <Link href="#">
          <a>
            <p className={styles.getStarted}>How to Use</p>
          </a>
        </Link>
      </div>
    </div>
  );
}

const ReportsNav = (props) => {
  const toastAlert = () => {
    toast.notify("This feature is not available now!");
  };

  return (
    <div className={styles.container}>
      <ToastContainer align='center'/>
      <div className={styles.left}>
        <h4 className={styles.heading}>{props.title}</h4>
        <Link href="#">
          <a onClick={() => {toastAlert()}} className={styles.newPageButton}>
            Go to Expenses
          </a>
        </Link>
      </div>
      <div className={styles.right}>
        <Link href="#">
          <a className={styles.printButton}>
            <IconContext.Provider
              value={{ size: "25px", className: "react-icons-top" }}
            >
              <AiOutlinePrinter />
            </IconContext.Provider>
          </a>
        </Link>
      </div>
    </div>
  );
};

export { ReportsNav };
