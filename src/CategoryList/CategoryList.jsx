import React from "react";
import CategoryListItem from "../CategoryListItem/CategoryListItem.jsx";
import styles from "./CategoryList.module.css";
import PropTypes from "prop-types";

const CategoryList = (props) => {
  let displayContent;

  if (props.categorylist.length) {
    displayContent = props.categorylist.map((ca) => (
      <CategoryListItem key={ca.id} id={ca.id} name={ca.name} url={ca.image._url} />
  
    ));
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <div className={styles.categoryContainer}>
      <h1 className={styles.title}>Recipes</h1>
      <div className={styles.categoryGrid}>
        {displayContent}
      </div>
    </div>
  )
}

CategoryList.propTypes = {
  categorylist: PropTypes.array.isRequired
};

export default CategoryList;