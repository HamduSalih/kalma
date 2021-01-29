import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TopNavigation from '../public/Components/TopNavigation.js'
import SideBar from '../public/Components/SideBar.js'
import Dashboard from '../public/Components/Dashboard'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kalma</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <TopNavigation /> 
      <div className={styles.bodyContent}>
        <SideBar /> 
        <Dashboard />
      </div>        
    </div>
  )
}
