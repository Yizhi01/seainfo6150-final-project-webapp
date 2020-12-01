import React from "react";
import { Link } from "react-router-dom";
import styles from "./ThankyouPage.module.css";

const ThankyouPage = () => {
  return (
    <div className={styles.thankyouContainer}>
      <div className={styles.tyBackground}>
        <div className={styles.contentArea}>
          <h1>Thank You!</h1>
          <p>Your recipe have been sent to our team, we will review it and reach out to you soon!</p>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ThankyouPage;