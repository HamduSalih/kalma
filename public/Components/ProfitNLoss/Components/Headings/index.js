import React from "react";
import styles from "./styles.module.css";

export default class Headings extends React.Component {
  render() {
    return (
      <div>
        <h4 className={styles.Heading1}>Profit and Loss</h4>
        <h6 className={styles.duration}>From December 2020 to January 2020</h6>
      </div>
    );
  }
}
