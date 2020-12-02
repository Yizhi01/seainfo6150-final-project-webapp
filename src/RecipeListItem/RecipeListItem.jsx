import React from "react";
import { Link } from "react-router-dom";
import styles from "./RecipeListItem.module.css";
import PropTypes from "prop-types";

const RecipeListItem = (props) => {
  return (
    <div>
      <Link to={"/recipe/" + props.id} className={styles.recipeListItem} >
      <img
          className={styles.recipeImage}
          src={props.url}
          alt={props.name}
        />
        <p className={styles.recipeName}>{props.name}</p>
      </Link>
    </div>
  )
}

RecipeListItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default RecipeListItem;