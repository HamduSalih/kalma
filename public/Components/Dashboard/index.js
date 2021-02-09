import React from 'react'
import styles from './styles.module.css'
import NavBar from '../../Components/NavBar.js'
import { Bar } from 'react-chartjs-2'
import Collectible, { Unsettled } from './Components/CollectiBills'

const Dashboard = () => {
    var profitChart = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Income for selected period',
                data: ['2000', '4000', '1000', '2500', '700', '1000','2000', '4000', '1000', '2500', '700', '1000'],
                backgroundColor: '#e4e4e4',
                borderColor: '#e4e4e4',
                borderWidth: 1,
                hoverBackgroundColor: 'yellow',
                hoverBorderColor: 'yellow',
            },
            {
                label: 'Expenditure for selected period',
                data: ['2000', '4000', '1000', '2500', '700', '1000','2000', '4000', '1000', '2500', '700', '1000'],
                backgroundColor: '#cccccc',
                borderColor: '#cccccc',
                borderWidth: 1,
                hoverBackgroundColor: '#0000ff',
                hoverBorderColor: '0000ff#',
            },
        ]
    }

    return(
        <div className={styles.container}>
            <NavBar />
            
            <div className={styles.dashboardContainer}>
                <section className={styles.firstSection}>
                    <Collectible
                        AmountOwed = '5000'
                        Received = '2000'
                        Unpaid = '3000'
                    />
                    <Unsettled 
                        AmountOwed = '5000'
                        Paid = '2000'
                        Owing = '3000'
                    />
                </section>

                <section className={styles.firstSection}>
                    <div className={styles.middleCard}>
                        <div>
                            <h4 style={{marginBottom: '10px', fontWeight: 500, fontSize: '20px'}}>Profit and Loss</h4>
                        </div>
                        <div className={styles.infoBox}>
                            <div className={styles.header}>
                                <p>You Profit so far is GHS2000</p>
                            </div>
                            <div className={styles.content}>
                                <Bar 
                                    data={profitChart}
                                    height={250}
                                    options={{maintainAspectRatio : false}}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard