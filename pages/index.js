import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { MagicSpinner } from "react-spinners-kit";
import TextTransition, { presets } from "react-text-transition";
import { reactLocalStorage } from "reactjs-localstorage";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const TEXTS = [
    "Know where your money is going",
    "Have and overview of your business. Whenever, wherever.",
    "Stay on top with your receivables and track unpaid moeny.",
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 // every 5 seconds
    );
    setTimeout(() => {
      router.push("signup");
    }, 30000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Kalma</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Redressed&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.spinnerContainer}>
        <h2 style={{ fontFamily: "Redressed, cursive" }}>Kalma Accounts</h2>
        <MagicSpinner size={70} color="blue" loading={true} />
        <h4>
          <TextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.slow}
          />
        </h4>
      </div>
    </div>
  );
}
