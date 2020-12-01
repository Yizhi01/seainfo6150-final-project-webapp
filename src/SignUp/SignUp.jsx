import React from "react";
import SignUpForm from "./SignUpForm.jsx";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpLeftPanel}>
        <div className={styles.signUpContent}>
          <h1>SIGN UP</h1>
          <p>For more of the recipes you love</p>
        </div>
        
      </div>
      <div className={styles.signUpRightPanel}>
        <SignUpForm />
      </div>
    </div>
  )
};

export default SignUp;