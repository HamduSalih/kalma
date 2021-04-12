import React from "react";
import styles from "./styles.module.css";
import Table from "../Table";
import Link from "next/link";
import { reactLocalStorage } from "reactjs-localstorage";
import { firebase } from "../../Firebase/config";

class Unpaid extends React.Component{
  state = {};
  async componentDidMount() {
    var id = await reactLocalStorage.get("id");
    this.setState({ id });
    this.getUnpaidExpenses();
  }

  getUnpaidExpenses() {
    let { id } = this.state;
    firebase
      .firestore()
      .collection("users")
      .doc(id)
      .collection("expenses")
      .where("paidStatus", "==", "unpaid")
      .onSnapshot((querySnapshot) => {
        let unpaidExpenses = [];
        querySnapshot.forEach((doc) => {
          let newUnpaid = {
            date: doc.data().date,
            customer: doc.data().customerName,
            item: doc.data().itemName,
            amount: doc.data().amount,
          };
          unpaidExpenses.push(newUnpaid);
        });
        unpaidExpenses.length > 0 && this.setState({ unpaidExpenses });
      });
  }
  render(){
    const columns = [
        {
          Header: "Date",
          accessor: "date",
        },
        {
          Header: "Amount",
          accessor: "amount",
        },
        {
          Header: "Mode",
          accessor: "mode",
        },
        {
          Header: "Customer Name",
          accessor: "customer",
        },
        {
          Header: "Status",
          accessor: "status",
        },
      ]
    return (
      <div className={styles.container}>
        <h4 className={styles.heading}>Unpaid Expenses</h4>
        <div className={styles.tableDiv}>
        {(this.state.unpaidExpenses && (
            <Table columns={columns} data={this.state.unpaidExpenses} />
          )) || <p>You have no unpaid Expenses...</p>}
        </div>
      </div>
    );
  }
};

export default Unpaid;
