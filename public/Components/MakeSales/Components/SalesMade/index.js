import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { IconContext } from "react-icons";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import Table from "../../../../Components/Table";
import { reactLocalStorage } from "reactjs-localstorage";
import { firebase } from "../../../../Firebase/config";

class SalesMade extends React.Component {
  state = {};

  componentDidMount() {
    this.getAllUserSales();
  }

  //get all sales made from database
  getAllUserSales = async () => {
    var userId = await reactLocalStorage.get("id");
    console.log(userId);
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .collection("sales")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size > 0) {
          let retrievedSales = [];
          querySnapshot.forEach((doc) => {
            let theData = {
              date: doc.data().date,
              customer: doc.data().customerName,
              item: doc.data().itemName,
              mode: doc.data().paymentMode,
              amount: doc.data().amount,
            };
            retrievedSales.push(theData);
          });
          this.setState({ sales: retrievedSales });
          console.log(this.state.sales);
        }
      })
      .catch((error) => {
        console.log("Document does not exist ", error);
      });
  };

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
        Header: "Mode",
        accessor: "mode",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
    ];
    return (
      <div className={styles.container}>
        <div className={styles.button}>
          <Link href="/sales/add-sale">
            <a>
              <IconContext.Provider value={{ size: "30px", color: "#fff" }}>
                <AiOutlineAppstoreAdd />
              </IconContext.Provider>
            </a>
          </Link>
        </div>
        <div>
          {(this.state.sales && (
            <Table columns={columns} data={this.state.sales} />
          )) || <p>No docs to be loaded... Add a sale to view it here</p>}
        </div>
      </div>
    );
  }
}

export default SalesMade;
