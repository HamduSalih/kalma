import React from "react";
import styles from "./styles.module.css";
import Table from "../Table";
import Link from "next/link";
import { reactLocalStorage } from "reactjs-localstorage";
import { firebase } from "../../Firebase/config";

class Unpaid extends React.Component {
  state = {};
  async componentDidMount() {
    var id = await reactLocalStorage.get("id");
    this.setState({ id });
    this.getUnpaidSales();
  }

  getUnpaidSales() {
    let { id } = this.state;
    firebase
      .firestore()
      .collection("users")
      .doc(id)
      .collection("sales")
      .where("paidStatus", "==", "unpaid")
      .onSnapshot((querySnapshot) => {
        let unpaidSales = [];
        querySnapshot.forEach((doc) => {
          let newUnpaid = {
            date: doc.data().date,
            customer: doc.data().customerName,
            item: doc.data().itemName,
            amount: doc.data().amount,
          };
          unpaidSales.push(newUnpaid);
        });
        unpaidSales.length > 0 && this.setState({ unpaidSales });
      });
  }

  render() {
    const columns = [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Customer",
        accessor: "customer",
      },
      {
        Header: "Item",
        accessor: "item",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
    ];
    return (
      <div className={styles.container}>
        <h4 className={styles.heading}>Unpaid Sales</h4>
        <div className={styles.tableDiv}>
          {(this.state.unpaidSales && (
            <Table columns={columns} data={this.state.unpaidSales} />
          )) || <p>You have no unpaid sales...</p>}
        </div>
      </div>
    );
  }
}

export default Unpaid;
