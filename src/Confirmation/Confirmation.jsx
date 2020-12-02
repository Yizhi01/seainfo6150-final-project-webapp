import React, {useState} from "react";
import ThankyouPage from "../ThankyouPage/ThankyouPage.jsx";
import styles from "./Confirmation.module.css";
import PropTypes from "prop-types";

const Confirmation = (props) => {
  const { title, description, serves, cookTime, difficulty, ingredients, instructions } = props;

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
            <h1 className={styles.recipeTitle}>{title}</h1>
            <hr/>
            <p>{description}</p>
            <hr/>
            <div>
              <p><span>SERVERS: </span>{serves}</p>
              <p><span>COOKS IN: </span>{cookTime}</p>
              <p><span>DIFFICULTY: </span>{difficulty}</p>
            </div>
            <hr />
            <div>
              <h2>Ingredients:</h2>
              <p>{ingredients}</p>
            </div>
            <hr />
            <div>
              <h2>Instructions:</h2>
              <p>{instructions}</p>
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

Confirmation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  serves: PropTypes.string.isRequired,
  cookTime: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
}

export default Confirmation;