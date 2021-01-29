import React from 'react'
import styles from './styles.module.css'
import NavBar from '../../Components/NavBar.js'

const Dashboard = () => {
    return(
        <div className={styles.container}>
            <NavBar />
            
            <div className={styles.dashboardContainer}>
                <section className={styles.firstSection}>
                    <div className={styles.topCards}>
                        <div>
                            <h4 style={{marginBottom: '10px', fontWeight: 500, fontSize: '20px'}}>Sum of Collectibles</h4>
                        </div>
                        <div className={styles.infoBox}>
                            <div className={styles.header}>
                                <p>Your customers owe you GHS5000</p>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.contentLeft}>
                                    <h4>Received</h4>
                                    <p>GHS 2000</p>
                                </div>
                                <div className={styles.contentRight}>
                                    <h4>Unpaid</h4>
                                    <p>GHS 3000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.topCards}>
                        <div>
                            <h4 style={{marginBottom: '10px', fontWeight: 500, fontSize: '20px'}}>Unsettled Bills</h4>
                        </div>
                        <div className={styles.infoBox}>
                            <div className={styles.header}>
                                <p>Your customers owe GHS5000</p>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.contentLeft}>
                                    <h4>Paid</h4>
                                    <p>GHS 2000</p>
                                </div>
                                <div className={styles.contentRight}>
                                    <h4>Owing</h4>
                                    <p>GHS 3000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard