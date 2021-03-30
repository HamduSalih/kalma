import React from 'react'
import styles from "./styles.module.css";
import NavBar from "../../Components/NavBar.js";
import Form from './Components/Form'

const AddSale = () => {
    function testSth(){
        console.log(Form.state)
    }
    React.useEffect(() => {
        testSth();
        //return () => clearTimeout(intervalId);
      }, []);
    return(
        <div className={styles.container}>
            <NavBar title="Add a New Sale" />
            <Form />
        </div>
    )
}

export default AddSale