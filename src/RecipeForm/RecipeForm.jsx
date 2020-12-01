import React, { useState} from "react";
import styles from "./RecipeForm.module.css";
import Confirmation from "../Confirmation/Confirmation.jsx";

const RecipeForm = () => {
  const [submittedForm, setSubmittedForm] = useState();

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  }

  return (
    <div>
        {submittedForm ? (
          <Confirmation data={submittedForm}/>
        ) : (
          <form className={styles.recipeForm} onSubmit={onSubmit}>
            <h1 className={styles.formTitle}>Share your recipe with us!</h1>
            <h2 className={styles.sectionTitle}>Recipe Detail</h2>
            <div className={styles.recipeFormGroup}>
              <label className={styles.groupLabel} htmlFor="title">
                Title<span>*</span>
              </label>
              <input type="text" name="title" id="title" required/>
            </div>
            <div className={styles.categoryGroup}>
              <label className={styles.groupLabel} htmlFor="category">Recipe Category<span>*</span></label>
              <div>
                <select className={styles.dropDown} name="category" id="category">
                  <option value="1">Breadfast</option>
                  <option value="2">Lunch</option>
                  <option value="3">Dinner</option>
                  <option value="4">Desserts</option>
                  <option value="5">Drinks</option>
                  <option value="6">Holiday</option>
                </select>
              </div>
            </div>
            <div className={styles.recipeFormGroup}>
              <label className={styles.groupLabel} htmlFor="serves">
                Number of Servings<span>*</span>
              </label>
              <input 
                type="text" 
                name="serves" 
                id="serves" 
                pattern="[0-9]{1,2}" 
                title="Please enter number from 1 to 99"
                required/>
            </div>
            <div className={styles.recipeFormGroup}>
              <label className={styles.groupLabel} htmlFor="cookTime">
                Cook Time<span>*</span>
              </label>
              <input type="text" name="cookTime" id="cookTime" required/>
            </div>
            <div className={styles.difficultyGroup}>
              <label className={styles.groupLabel}>Difficulty</label>
              <div className={styles.optionGroup}>
                <div>
                  <input 
                    type="radio" 
                    id="easy" 
                    name="difficulty" 
                    value="easy" 
                    defaultChecked />
                  <label className={styles.redioOption} htmlFor="easy">Easy</label>
                </div>
                <div>
                  <input type="radio" id="medium" name="difficulty" value="medium" />
                  <label className={styles.redioOption} htmlFor="medium">Medium</label>
                </div>
                <div>
                  <input type="radio" id="hard" name="difficulty" value="hard"/>
                  <label className={styles.redioOption} htmlFor="hard">Hard</label>
                </div>
              </div>
            </div>
            <div className={styles.recipeFormGroup}>
              <label className={styles.groupLabel} htmlFor="description">
                Description<span>*</span>
              </label>
              <textarea rows="3" name="description" id="description" required></textarea>
            </div>
            <div className={styles.recipeFormGroup}>
              <label className={styles.groupLabel} htmlFor="ingredients">
                Ingredients<span>*</span>
              </label>
              <textarea rows="4" name="ingredients" id="ingredients" required></textarea>
            </div>
            <div className={styles.recipeFormGroup}>
              <label className={styles.groupLabel} htmlFor="instructions">
                Instructions<span>*</span>
              </label>
              <textarea rows="4" name="instructions" id="instructions" required></textarea>
            </div>
            <div className={styles.recipeFormGroup}>
              <label className={styles.groupLabel} htmlFor="image">Recipe Image</label>
              <input className={styles.recipeFormGroup} type="file" name="image" id="image" />  
            </div>
            
            <h2 className={styles.sectionTitle}>Recipe Credit</h2>
            <div className={styles.recipeFormGroup}>
              <label className={styles.groupLabel}>First Name<span>*</span></label>
              <input
                type="text"
                required
                pattern="[A-Za-z]{1,20}"
                title="Please enter 1 to 20 letters"
              />
            </div>
            <div className={styles.recipeFormGroup}>
              <label className={styles.groupLabel}>Last Name<span>*</span></label>
              <input
                type="text"
                required
                pattern="[A-Za-z]{1,20}"
                title="Please enter 1 to 20 letters"
              />
            </div>
            <div className={styles.recipeFormGroup}>
              <label className={styles.groupLabel}>Email<span>*</span></label>
              <input type="email" required />
            </div>
            <div className={styles.recipeFormGroup}>
              <label className={styles.groupLabel}>
                How would you rate your overall satisfaction with our recipes?</label>
              <div>
                <select className={styles.dropDown}>
                  <option value="5">Extremely satisfied</option>
                  <option value="4">Somewhat satisfied</option>
                  <option value="3">Neither satisfied nor dissatisfied</option>
                  <option value="2">Somewhat dissatisfied</option>
                  <option value="1">Extremely dissatisfied</option>
                </select>
              </div>
            </div>
            
            <input className={styles.button} type="submit" value="Submit your recipe" />
          </form>
        )}
    </div>
  )
};

export default RecipeForm;