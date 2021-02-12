import React from 'react'
import styles from './styles.module.css'

export default class AddSaleForm extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <div>
                        <label>
                            Date: *
                        </label>
                        <input type='date' />
                    </div>
                </form>
            </div>
        )
    }
}