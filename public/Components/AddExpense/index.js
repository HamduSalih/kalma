import React from 'react'
import styles from "./styles.module.css";
import NavBar from "../../Components/NavBar.js";
import Form from './Components/Form'

const AddSale = () => {
    return(
        <div className={styles.container}>
            <NavBar title="Record Expense" />
            <Form />
        </div>
    )
}

export default AddSale