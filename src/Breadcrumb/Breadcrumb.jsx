import React from "react";
import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.css";
import PropTypes from "prop-types";

const Breadcrumb = (props) => {
  return (
    <div>
      <nav>
        <ol className={styles.breadcrumbList}>
          <li>
            <Link className={styles.breadcrumbTitle} to="/">Home</Link>
          </li>
          <li>
            <Link className={styles.breadcrumbTitle} to="/categoryList">Recipes</Link>
          </li>
          <li>
            <Link 
              className={styles.breadcrumbTitle}
              to={"/category/" + props.categoryId + "/" + props.categoryName}>
                {props.categoryName}
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

Breadcrumb.propTypes = {
  categoryId: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
};

export default Breadcrumb;

