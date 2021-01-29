import React from 'react'
import styles from '../../styles/NavBar.module.css'
import Link from 'next/link'

export default function NavBar(props){
    return(
        <div className={styles.container}>
            <div>
                <h4 className={styles.heading}>Dashboard</h4>
            </div>
            <div>
                <Link href="#">
                    <a>
                        <p className={styles.getStarted}>How to Use</p>
                    </a>
                </Link>
            </div>
        </div>
    )
}