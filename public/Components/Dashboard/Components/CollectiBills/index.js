import React from 'react'
import styles from './styles.module.css'

export default class Collectible extends React.Component{
    render(){
        return(
                <div className={styles.topCards}>
                    <div>
                        <h4 style={{marginBottom: '10px', fontWeight: 500, fontSize: '20px'}}>Sum of Collectibles</h4>
                    </div>
                    <div className={styles.infoBox}>
                        <div className={styles.header}>
                            <p>Your customers owe you GHS{this.props.AmountOwed}</p>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.contentLeft}>
                                <h4>Received</h4>
                                <p>GHS{this.props.Received}</p>
                            </div>
                            <div className={styles.contentRight}>
                                <h4>Unpaid</h4>
                                <p>GHS{this.props.Unpaid}</p>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export class Unsettled extends React.Component{
    render(){
        return(
                <div className={styles.topCards}>
                    <div>
                        <h4 style={{marginBottom: '10px', fontWeight: 500, fontSize: '20px'}}>Unsettled Bills</h4>
                    </div>
                    <div className={styles.infoBox}>
                        <div className={styles.header}>
                            <p>You owe GHS{this.props.AmountOwed}</p>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.contentLeft}>
                                <h4>Paid</h4>
                                <p>GHS{this.props.Paid}</p>
                            </div>
                            <div className={styles.contentRight}>
                                <h4>Owing</h4>
                                <p>GHS{this.props.Owing}</p>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}