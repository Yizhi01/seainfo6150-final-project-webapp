import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { isEmpty } from "lodash";

import Home from "./Home/Home.jsx";
import CategoryList from "./CategoryList/CategoryList.jsx";
import RecipeList from "./RecipeList/RecipeList.jsx";
import RecipeDetail from "./RecipeDetail/RecipeDetail.jsx";
import RecipeForm from "./RecipeForm/RecipeForm.jsx";
import About from "./About/About.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import ThankyouPage from "./ThankyouPage/ThankyouPage.jsx";
import Error from "./Error/Error.jsx";
import styles from "./App.module.css";

function App() {
  // fetch data from mock API (https://www.mockable.io/) for displaying categories and recipes 
  const [fetchedCategories, setFetchedCategories] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://demo0086689.mockable.io/recipe-categories-api");
      const resJson = await res.json();
      setFetchedCategories(Object.values(resJson));
    };
    if (isEmpty(fetchedCategories)) {
      fetchData();
    }
  }, [fetchedCategories]);

  const [fetchedRecipes, setFetchedRecipes] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://demo0086689.mockable.io/recipes-api");
      const resJson = await res.json();
      setFetchedRecipes(Object.values(resJson));
    };
    if (isEmpty(fetchedRecipes)) {
      fetchData();
    }
  }, [fetchedRecipes]);

  return (
    <>
      <header>
        <nav className={styles.nav}>
          <Link className={styles.logo} to="/">Tasty Food</Link>
          <ul className={styles.ul}>
            
            {/* these links should show you how to connect up a link to a specific route */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categoryList">Recipes</Link>
            </li>
            <li>
              <Link to="/newRecipe">New Recipe</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signUp">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/newRecipe" exact component={RecipeForm} />
        <Route path="/about" exact component={About} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/thankyou" exact component={ThankyouPage} />
        <Route path="/categoryList" exact           
        render={() => (
          <CategoryList categorylist={fetchedCategories} />
        )} />
        {/* passing parameters via a route path */}
        <Route
          path="/category/:categoryId/:categoryName"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <RecipeList
              categoryId={match.params.categoryId}
              categoryName={match.params.categoryName}
              recipes={fetchedRecipes}
            />
          )}
        />
        <Route
          path="/recipe/:recipeId"
          exact
          render={({ match }) => (
            <RecipeDetail
              recipeId={match.params.recipeId}
              recipes={fetchedRecipes}
            />
          )}
        />
        <Route path="/error" exact component={Error} />
        <Route component={Error} />
      </Switch>

      <footer className={styles.footer}>
        <p>All images and recipes from Internet</p>
        <p>©2020 INFO6150 FINAL PROJECT CREATED BY YIZHI LIANG</p>
        <ul className={styles.socialMedias}>
          <li><a href="https://twitter.com/">Twitter</a></li>
          <li><a href="https://www.facebook.com/">Facebook</a></li>
          <li><a href="https://www.instagram.com/">Instagram</a></li>
          <li><Link to="error">404 Page</Link></li>
        </ul>
      </footer>
    </>
  );
}

export default App;
