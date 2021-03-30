import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { IconContext } from "react-icons";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import Table from "../../../../Components/Table";
import { reactLocalStorage } from "reactjs-localstorage";
import { firebase } from "../../../../Firebase/config";

const SalesMade = () => {
  const [sales, setSales] = useState([]);
  //get all sales made from database
  async function getAllUserSales() {
    var userId = await reactLocalStorage.get("id");
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
          setSales(retrievedSales);
          console.log(sales);
        }
      })
      .catch((error) => {
        console.log("Document does not exist ", error);
      });
  }

  React.useEffect(() => {
    getAllUserSales();
    //return () => clearTimeout(intervalId);
  }, []);

  const columns = React.useMemo(
    () => [
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
    ],
    []
  );

  const data = React.useMemo(() => sales, []);
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
        {(sales.length > 0 && <Table columns={columns} data={data} />) || (
          <p>No docs to be loaded... Add a sale to view it here</p>
        )}
      </div>
    </div>
  );
};

export default SalesMade;
