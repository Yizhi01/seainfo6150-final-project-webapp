import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryListItem.module.css";
import PropTypes from "prop-types";

const CategoryListItem = (props) => {
  const { id, name, url } = props; 
  return (
  <div>
    <Link to={"/category/" + id +'/' + name} className={styles.categoryItem}>
      <img
        className={styles.categoryImage}
        src={url}
        alt={name}
      />
      <p className={styles.categoryName}>{name}</p>
    </Link>
  </div>);
};

CategoryListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default CategoryListItem;
