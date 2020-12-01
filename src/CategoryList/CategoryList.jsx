import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryList.module.css";
import PropTypes from "prop-types";

const CategoryList = (props) => {
  let displayContent;

  if (props.categorylist.length) {
    displayContent = props.categorylist.map((ca) => (
      <div key={ca.id}>
        <Link to={"/category/" + ca.id +'/' + ca.name} className={styles.categoryItem}>
          <img
            className={styles.categoryImage}
            src={ca.image._url}
            alt={ca.name}
          />
          <p className={styles.categoryName}>{ca.name}</p>
        </Link>
      </div>
  
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