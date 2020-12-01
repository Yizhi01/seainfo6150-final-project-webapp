import React, { useState} from "react";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
  const [submittedForm, setSubmittedForm] = useState();

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  }

  return (
    <div>
      {submittedForm ? (
        <div className={styles.successPage} >
          <img className={styles.successImage}
            src="http://source.unsplash.com/qWlkCwBnwOE/1000x619" alt="funny pineapples" />
          Welcome {submittedForm.get("username")}, you have signed up successfully. Enjoy exploring our website!
        </div>
      ) : (
        <form className={styles.signUpForm} onSubmit={onSubmit}>
          <h1>Tasty Food</h1>
          <h3>Create an Account</h3>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input className={styles.input} type="email" name="email" id="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username ((only letters and numbers)</label>
            <input className={styles.input} type="text" name="username" id="username" 
              pattern="[A-Za-z0-9]{4,20}" title="Please enter 4-20 letters or numbers" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input className={styles.input} type="password" name="password" id="password" required />
          </div>
          <div className={styles.formGroup}>
            <input className={styles.signUpBtn} type="submit" value="Sign Up"/>
          </div>
          
        </form>
      )}
    </div>
  )
}

export default SignUpForm;