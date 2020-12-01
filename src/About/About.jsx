import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <img className={styles.aboutImg} src="http://source.unsplash.com/ZrhtQyGFG6s/1000x619" alt="chat with friends"></img>
      <p>Hey Friends <span role="img" aria-label="wave hand">👋🏼 </span>, </p>
      <p>
        Are you looking for trying new recipes? Expecting of your holiday feast with a bang? Pressed for time?
      </p>
      <p>
        Welcome to Tasty Food website. It’s a good place to give you some inspiration when you try to cook at home and allow you to cook delicious dishes efficiently and effortlessly from anywhere in the world.
      </p>
      <p>Also, if you are a cook lover and like to share your own recipe, please <a href="/signUp">join our community</a>, submit your recipe <a href="/newRecipe">here</a>!</p>
    </div>
  )
}

export default About;