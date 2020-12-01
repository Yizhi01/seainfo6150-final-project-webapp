import React, {useState} from "react";
import ThankyouPage from "../ThankyouPage/ThankyouPage.jsx";
import styles from "./Confirmation.module.css";

const Confirmation = (props) => {
  const { data } = props;

  const [isConfirm, setConfirm] = useState();

  function handleClick(e) {
    e.preventDefault();
    const isConfirm =  true;
    setConfirm(isConfirm);
  }
  return (
    <div>
      {
      isConfirm ? (
        <ThankyouPage />
      ) : (
        <div className={styles.confirmContainer} >
          <p>Please confirm your recipe</p>
          <div className={styles.recipeDetail}>
            <h1 className={styles.recipeTitle}>{data.get("title")}</h1>
            <hr/>
            <p>{data.get("description")}</p>
            <hr/>
            <div>
              <p><span>SERVERS: </span>{data.get("serves")}</p>
              <p><span>COOKS IN: </span>{data.get("cookTime")}</p>
              <p><span>DIFFICULTY: </span>{data.get("difficulty")}</p>
            </div>
            <hr />
            <div>
              <h2>Ingredients:</h2>
              <p>{data.get("ingredients")}</p>
            </div>
            <hr />
            <div>
              <h2>Instructions:</h2>
              <p>{data.get("instructions")}</p>
            </div>      
          </div>
          <div className={styles.action}>
            <input 
              className={styles.button} 
              type="submit" 
              value="Confirm recipe" 
              onClick={handleClick}/>
          </div>
        </div>
      )}
    </div>
  )
};

export default Confirmation;