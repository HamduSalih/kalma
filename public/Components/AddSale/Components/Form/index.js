import React from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import styles from "./styles.module.css";
import { firebase } from "../../../../Firebase/config";
import { ToastContainer, toast } from "react-nextjs-toast";

export default class AddSaleForm extends React.Component {
  state = {
    paidStatus: "paid",
    date: new Date(),
    customerName: "",
    itemName: "",
    paymentMode: "",
    amount: "",
  };

  async componentDidMount() {
    this.setState({ id: reactLocalStorage.get("id") });
  }

  handleChange = (e, name) => {
    e.preventDefault();
    switch (name) {
      case "paidStatus":
        this.setState({ paidStatus: e.target.value });
        break;
      case "date":
        this.setState({ date: e.target.value });
        break;
      case "customerName":
        this.setState({ customerName: e.target.value });
        break;
      case "itemName":
        this.setState({ itemName: e.target.value });
        break;
      case "paymentMode":
        this.setState({ paymentMode: e.target.value });
        break;
      case "amount":
        this.setState({ amount: e.target.value });
        break;

      default:
        break;
    }
  };

  addSalestoDB = async (e) => {
    let {
      paidStatus,
      paymentMode,
      date,
      amount,
      customerName,
      itemName,
    } = this.state;
    e.preventDefault();
    var id = await reactLocalStorage.get("id");
    console.log(id);
    if (Object.values(this.state).includes("")) {
      console.log("all fields not check");
    } else {
      firebase
        .firestore()
        .collection("users")
        .doc(id)
        .collection("sales")
        .add({
          paidStatus: paidStatus,
          paymentMode: paymentMode,
          date: date,
          amount: amount,
          customerName: customerName,
          itemName: itemName,
        })
        .then(() => {
          toast.notify("New sales added successfully");
          this.setState({
            paidStatus: "paid",
            date: new Date(),
            customerName: "",
            itemName: "",
            paymentMode: "",
            amount: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div>
        <ToastContainer align="center" />
        <form className={styles.formContainer}>
          <div className={styles.formControl}>
            <label className={styles.label}>Status:*</label>
            <select
              className={styles.select}
              value={this.state.paidStatus}
              onChange={(e) => this.handleChange(e, "paidStatus")}
            >
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
            </select>
          </div>
          <div className={styles.formControl}>
            <label className={styles.label}>Date:*</label>
            <input
              type="date"
              value={this.state.date}
              onChange={(e) => this.handleChange(e, "date")}
              className={styles.date}
            />
          </div>
          <div className={styles.formControl}>
            <label className={styles.label}>Customer Name:*</label>
            <input
              type="text"
              value={this.state.customerName}
              onChange={(e) => this.handleChange(e, "customerName")}
              className={styles.date}
            />
          </div>
          <div className={styles.formControl}>
            <label className={styles.label}>Item:*</label>
            <input
              type="text"
              value={this.state.itemName}
              onChange={(e) => this.handleChange(e, "itemName")}
              className={styles.date}
            />
          </div>
          <div className={styles.formControl}>
            <label className={styles.label}>Payment Mode:*</label>
            <input
              type="text"
              value={this.state.paymentMode}
              onChange={(e) => this.handleChange(e, "paymentMode")}
              className={styles.date}
            />
          </div>
          <div className={styles.formControl}>
            <label className={styles.label}>Amount:*</label>
            <input
              type="text"
              value={this.state.amount}
              onChange={(e) => this.handleChange(e, "amount")}
              className={styles.date}
            />
          </div>
          <div className={styles.saveDiv}>
            <input
              className="globalButton"
              type="button"
              value="Save"
              onClick={(e) => {
                this.addSalestoDB(e);
              }}
            />
            <input className="globalButtonCancel" type="button" value="Reset" />
          </div>
        </form>
      </div>
    );
  }
}
