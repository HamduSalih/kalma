import React from "react";
import styles from "./styles.module.css";

export default class AddSaleForm extends React.Component {
  render() {
    return (
      <div>
        <form className={styles.formContainer}>
          <div className={styles.formControl}>
            <label className={styles.label}>Status:*</label>
            <select className={styles.select}>
                <option value='Paid'>Paid</option>
                <option value='Unpaid'>Unpaid</option>
            </select>
          </div>
          <div className={styles.formControl}>
            <label className={styles.label}>Date:*</label>
            <input type="date" className={styles.date}/>
          </div>
          <div className={styles.formControl}>
            <label className={styles.label}>Customer Name:*</label>
            <input type="text" className={styles.date}/>
          </div>
          <div className={styles.formControl}>
            <label className={styles.label}>Item:*</label>
            <input type="text" className={styles.date}/>
          </div>
          <div className={styles.formControl}>
            <label className={styles.label}>Payment Mode:*</label>
            <input type="text" className={styles.date}/>
          </div>
          <div className={styles.formControl}>
            <label className={styles.label}>Amount:*</label>
            <input type="text" className={styles.date}/>
          </div>
        </form>
      </div>
    );
  }
}
