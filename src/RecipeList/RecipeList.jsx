import React from "react";
import RecipeListItem from "../RecipeListItem/RecipeListItem.jsx";
import styles from "./RecipeList.module.css";
import PropTypes from "prop-types";

const RecipeList = (props) => {
  const { categoryId, recipes } = props; 
  let recipelist;
  if (recipes !== null && recipes.length) {
    recipelist = recipes.map((recipe) => {
      if (recipe.categoryId === categoryId) {
        return (
          <RecipeListItem key={recipe.recipeId} id={recipe.recipeId} url={recipe.image._url} name={recipe.name} />
        );
      }
      return "";
    });
  } else {
    recipelist = <div>You have no data!</div>;
  }

  return (
    <div className={styles.recipeListContainer}>
      <h1 className={styles.categoryName}>{props.categoryName} Recipes</h1>
      <div className={styles.recipeGrid}>
        {recipelist}
      </div>
    </div>
  );
}

RecipeList.propTypes = {
  categoryId: PropTypes.string.isRequired,
  recipes: PropTypes.array.isRequired
};

export default RecipeList;