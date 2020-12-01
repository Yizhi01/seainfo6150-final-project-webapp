import React from "react";
import errorImage from "../images/errorImage.png";
import styles from './Error.module.css';

const Error = () => {
return (
  <div className={styles.errorContainer}>
    <img className={styles.errorImage} src={errorImage} alt="error" />
    <h1>Oops! Something's missing...</h1>
    <p>It seems like we donut find the page you're looking for. It doesn't exist, isn't available or was loading incorrectly.</p>
    <a className={styles.backBtn} href="/">Back to Home</a>
  </div>
)
}

export default Error
