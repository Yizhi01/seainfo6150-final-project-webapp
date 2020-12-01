import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb.jsx";
import styles from "./RecipeDetail.module.css";
import PropTypes from "prop-types";

const RecipeDetail = (props) => {
  const { recipeId, recipes } = props;
  const recipe = recipes[recipeId - 1];
  const ingredients = recipe.ingredients.map((ing, index) => (
    <li key={index}>{ing}</li>
  ));
  const instructions = Object.values(recipe.instructions).map((val, index) => 
    {
      return (
        <li key={index}>
          <span>Step {index + 1}:</span>
          <p>{val}</p>
        </li>
      )
    }
  );

  return (
    <div className={styles.recipeContainer}>
      <Breadcrumb categoryId={recipe.categoryId} categoryName={recipe.categoryName}/>
      <div className={styles.recipeTop}>
        <img className={styles.image} src={recipe.image._url} alt={recipe.name} />
        <div className={styles.recipeDetail}>
          <h1>{recipe.name}</h1>
          <p className={styles.description}>{recipe.description}</p>
          <hr/>
          <div className={styles.recipeInfo}>
            <p><span>SERVERS</span>{recipe.serves}</p>
            <p><span>COOKS IN</span>{recipe.cookTime}</p>
            <p><span>DIFFICULTY</span>{recipe.difficulty}</p>
          </div>
          <hr />
        </div>
      </div>
      <div className={styles.recipeContent}>
        <div className={styles.ingredients}>
          <h2>ingredients:</h2>
          <ul>{ingredients}</ul>
        </div>
        <div className={styles.instructions}>
          <h2>instructions:</h2>
          <ul>{instructions}</ul>
        </div>
      </div>
    </div>
  );
};

RecipeDetail.propTypes = {
  recipeId: PropTypes.string.isRequired,
  recipes: PropTypes.array.isRequired
};

export default RecipeDetail;