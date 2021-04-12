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

  const [nextForm, setNextForm] = useState(false);
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [bizName, setBizName] = useState("");
  const [currency, setCurrency] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [loading, setLoading] = useState(false);

  function showNextForm(e) {
    e.preventDefault();
    if (nextForm == true) {
      setNextForm(false);
    } else {
      setNextForm(true);
    }
  }

  function handleChange(e, name) {
    switch (name) {
      case "fullname":
        setFullname(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "bizName":
        setBizName(e.target.value);
        break;
      case "currency":
        setCurrency(e.target.value);
        break;
      case "zipcode":
        setZipcode(e.target.value);
        break;

      default:
        break;
    }
  }

  const toastAlert = () => {
    toast.notify("Please fill in all fields!");
  };

  function registerUser(e) {
    e.preventDefault();
    const userData = {
      userId: uuid4(),
      fullname: fullName,
      email: email,
      password: password,
      phone: phone,
      businessName: bizName,
      currency: currency,
      zipCode: zipcode,
    };

    console.log(userData);

    if (
      userData.fullname.trim() == "" ||
      userData.email.trim() == "" ||
      userData.password == "" ||
      userData.phone.trim() == "" ||
      userData.businessName.trim() == "" ||
      userData.currency.trim() == "" ||
      userData.zipCode.trim() == "" ||
      !userData.email.includes("@") ||
      !userData.email.includes(".com")
    ) {
      toastAlert();
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.trim(), password)
        .then((response) => {
          const data = {
            userId: userData.userId,
            fullname: userData.fullname.trim(),
            email: userData.email,
            phone: userData.phone.trim(),
            businessName: userData.businessName.trim(),
            currency: userData.currency.trim(),
            zipCode: userData.zipCode.trim(),
          };
          let usersRef = firebase.firestore().collection("users");
          usersRef
            .doc(userData.userId)
            .set(data)
            .then(() => {
              console.log("Registration complete");
              setLoading(true);
              reactLocalStorage.set("id", userData.userId);
              reactLocalStorage.set("isLoggedIn", 1);
            })
            .catch((err) => {
              console.log("SIGN UP ERROR====>", err);
              setLoading(false);
            });
        })
        .catch((err) => {
          console.log("SIGN UP ERROR====>", err);
          setLoading(false);
        });
    }
  }

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
      {(!nextForm && !loading && (
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
                      htmlFor="fullname"
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
                      name="fullname"
                      value={fullName}
                      onChange={(v) => {
                        handleChange(v, "fullname");
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
                      Email
                    </label>
                    <input
                      className={styles.regInputs}
                      type="email"
                      placeholder="Your email"
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
                      type="text"
                      placeholder="Your password"
                      value={password}
                      onChange={(v) => {
                        handleChange(v, "password");
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
                      Phone
                    </label>
                    <input
                      className={styles.regInputs}
                      type="text"
                      placeholder="Your phone number"
                      value={phone}
                      onChange={(v) => {
                        handleChange(v, "phone");
                      }}
                    />
                  </div>
                  <div className={styles.formElements}>
                    <input
                      className={styles.regButtons}
                      type="submit"
                      value="Next"
                      onClick={(e) => {
                        showNextForm(e);
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )) ||
        (!loading && (
          <div className={styles.signUpPageContainer}>
            <div className={styles.signUpCard}>
              <div className={styles.signUpLeft}>
                <div style={{ height: 150 }}>
                  <h3
                    style={{ fontFamily: "Redressed, cursive", color: "#fff" }}
                  >
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
                  <form className={styles.regform2}>
                    <div className={styles.formElements}>
                      <label
                        htmlFor="businessName"
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
                        placeholder="Your business name"
                        name="businessName"
                        value={bizName}
                        onChange={(v) => {
                          handleChange(v, "bizName");
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
                        Currency
                      </label>
                      <input
                        className={styles.regInputs}
                        type="text"
                        placeholder="Your currency"
                        value={currency}
                        onChange={(v) => {
                          handleChange(v, "currency");
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
                        ZIP or Postal Code
                      </label>
                      <input
                        className={styles.regInputs}
                        type="text"
                        placeholder="Your postal code"
                        value={zipcode}
                        onChange={(v) => {
                          handleChange(v, "zipcode");
                        }}
                      />
                    </div>
                    <div className={styles.formElements}>
                      <input
                        className={styles.regButtons}
                        type="submit"
                        value="Now, Let's Ride..."
                        onClick={(e) => {
                          e.preventDefault;
                          registerUser(e);
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: '100vh'
          }}
        >
          <MagicSpinner size={70} color="blue" loading={true} />
        </div>
      )}
    </div>
  );
}
