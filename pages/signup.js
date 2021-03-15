import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { reactLocalStorage } from "reactjs-localstorage";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const [index, setIndex] = React.useState(0);

  const [nextForm, setNextForm] = useState(true);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 // every 5 seconds
    );
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {(!nextForm && (
        <div className={styles.signUpPageContainer}>
          <div className={styles.signUpCard}>
            <div className={styles.signUpLeft}>
              <div style={{ height: 150 }}>
                <h3 style={{ fontFamily: "Redressed, cursive", color: "#fff" }}>
                  Kalma
                </h3>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "RocknRoll One, sans-serif",
                    color: "#fff",
                    fontSize: 25,
                  }}
                >
                  Kalma Accounts lifts the burden of keeping track of your
                  finances.
                </p>
                <p
                  style={{
                    fontFamily: "Noto Sans SC, sans-serif",
                    color: "#fff",
                    fontWeight: 100,
                  }}
                >
                  Your business receives a huge boost when you use Kalma
                  Accounts. You make more money and get a better peace of mind.
                </p>
              </div>
            </div>
            <div className={styles.signUpRight}>
              <h2
                style={{
                  fontFamily: "Noto Sans SC, sans-serif",
                  color: "blue",
                }}
              >
                Create your Kalma Account
              </h2>
              <div style={{ display: "flex" }}>
                <form className={styles.regform1}>
                  <div className={styles.formElements}>
                    <label
                      style={{
                        fontFamily: "Noto Sans SC, sans-serif",
                        color: "blue",
                      }}
                    >
                      Name
                    </label>
                    <input
                      className={styles.regInputs}
                      type="text"
                      placeholder="Your fullname"
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label
                      style={{
                        fontFamily: "Noto Sans SC, sans-serif",
                        color: "blue",
                      }}
                    >
                      Email
                    </label>
                    <input
                      className={styles.regInputs}
                      type="text"
                      placeholder="Your email"
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label
                      style={{
                        fontFamily: "Noto Sans SC, sans-serif",
                        color: "blue",
                      }}
                    >
                      Phone
                    </label>
                    <input
                      className={styles.regInputs}
                      type="text"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className={styles.formElements}>
                    <input
                      className={styles.regButtons}
                      type="submit"
                      value="Next"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )) || (
        <div className={styles.signUpPageContainer}>
          <div className={styles.signUpCard}>
            <div className={styles.signUpLeft}>
              <div style={{ height: 150 }}>
                <h3 style={{ fontFamily: "Redressed, cursive", color: "#fff" }}>
                  Kalma
                </h3>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "RocknRoll One, sans-serif",
                    color: "#fff",
                    fontSize: 25,
                  }}
                >
                  Enjoy your finances once again.
                </p>
                <p
                  style={{
                    fontFamily: "Noto Sans SC, sans-serif",
                    color: "#fff",
                    fontWeight: 100,
                  }}
                >
                  Let tracking finances become the fun part of your business
                  again by using Kalma Accounts. Count your money with smiles.
                </p>
              </div>
            </div>
            <div className={styles.signUpRight}>
              <h2
                style={{
                  fontFamily: "Noto Sans SC, sans-serif",
                  color: "blue",
                }}
              >
                Confirm your registration
              </h2>
              <div style={{ display: "flex" }}>
                <form className={styles.regform1}>
                  <div className={styles.formElements}>
                    <label
                      style={{
                        fontFamily: "Noto Sans SC, sans-serif",
                        color: "blue",
                      }}
                    >
                      Business Name
                    </label>
                    <input
                      className={styles.regInputs}
                      type="text"
                      placeholder="Your fullname"
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label
                      style={{
                        fontFamily: "Noto Sans SC, sans-serif",
                        color: "blue",
                      }}
                    >
                      Currency
                    </label>
                    <input
                      className={styles.regInputs}
                      type="text"
                      placeholder="Your email"
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label
                      style={{
                        fontFamily: "Noto Sans SC, sans-serif",
                        color: "blue",
                      }}
                    >
                      ZIP or Postal Code
                    </label>
                    <input
                      className={styles.regInputs}
                      type="text"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className={styles.formElements}>
                    <input
                      className={styles.regButtons}
                      type="submit"
                      value="Now, Let's Ride..."
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
