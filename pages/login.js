import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { MagicSpinner } from "react-spinners-kit";
import { reactLocalStorage } from "reactjs-localstorage";
import { useRouter } from "next/router";
import { v4 as uuid4 } from "uuid";
import { ToastContainer, toast } from "react-nextjs-toast";
import { firebase } from "../public/Firebase/config";

export default function Home() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e, name) {
    switch (name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  }

  function handleSignIn(e) {
    e.preventDefault();
    var signInData = {
      signEmail: email.trim(),
      signPassword: password,
    };
    setLoading(true);
    let { signEmail, signPassword } = signInData;
    firebase
      .auth()
      .signInWithEmailAndPassword(signEmail, signPassword)
      .then((response) => {
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .where("email", "==", signEmail)
          .get()
          .then((querySnapshot) => {
            var userData;
            var userId;
            querySnapshot.forEach((doc) => {
              userData = doc.data();
              userId = doc.id;
            });
            reactLocalStorage.set("id", userId);
            reactLocalStorage.set("isLoggedIn", 1);
            router.push("dashboard");
            setLoading(false);
          })
          .catch((error) => {
            console.log("error loging in=>", error);
            setLoading(false);
            toast.notify("Network error or Unexpected error!");
            setLoading(false);
          });
      })
      .catch((error) => {
        console.log("error loging in=>", error);
        setLoading(false);
        toast.notify("Network error or Unexpected error!");
        setLoading(false);
      });
  }

  const toastAlert = () => {
    toast.notify("Please fill in all fields!");
  };

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
      <ToastContainer align="center" />
      <div className={styles.signUpPageContainer}>
        {!loading && (
          <div className={styles.signUpCard}>
            <div className={styles.signUpRight}>
              <h2
                style={{
                  fontFamily: "Noto Sans SC, sans-serif",
                  color: "blue",
                }}
              >
                Log into your Kalma Account
              </h2>
              <div style={{ display: "flex" }}>
                <form className={styles.regform1}>
                  <div className={styles.formElements}>
                    <label
                      htmlFor="email"
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
                      placeholder="Input Email"
                      name="email"
                      value={email}
                      onChange={(v) => {
                        handleChange(v, "email");
                      }}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <label
                      style={{
                        fontFamily: "Noto Sans SC, sans-serif",
                        color: "blue",
                      }}
                    >
                      Password
                    </label>
                    <input
                      className={styles.regInputs}
                      type="password"
                      placeholder="Input your password"
                      value={password}
                      onChange={(v) => {
                        handleChange(v, "password");
                      }}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <input
                      className={styles.regButtons}
                      type="submit"
                      value="Login"
                      onClick={(e) => handleSignIn(e)}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      {loading && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <MagicSpinner size={70} color="blue" loading={true} />
          <p>We spicing up your space</p>
        </div>
      )}
    </div>
  );
}
