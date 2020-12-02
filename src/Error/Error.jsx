import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../images/errorImage.png";
import styles from './Error.module.css';

const Error = () => {
return (
  <div className={styles.errorContainer}>
    <img className={styles.errorImage} src={errorImage} alt="error" />
    <h1>Oops! Something's missing...</h1>
    <p>It seems like we donut find the page you're looking for. It doesn't exist, isn't available or was loading incorrectly.</p>
    <Link className={styles.backBtn} to="/">Back to Home</Link>
  </div>
)
}

export default Error
