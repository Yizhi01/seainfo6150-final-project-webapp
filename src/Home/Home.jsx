import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {

  return (
    <div className={styles.homeContainer}>
      <section className={styles.jumbotron}>
        <div className={styles.heroImage} ></div>
        <div className={styles.jumbotronContent}>
          <h1>Welcome to Tasty Food</h1>
          <h3>There is no sincere love than the love of food</h3>
          <Link className={styles.jumbotronBtn} to="/categoryList" >Explore Recipes</Link>
        </div>
      </section>

      <section className={styles.popularContainer}> 
        <h3 className={styles.sectionTitle}>Popular recipes:</h3>
        <p>Looking for the best holiday recipes? Use one of our most popular recipes that will make your celebrations memorable.</p>
        <hr />
        <ul className={styles.popularGrid}>
          <li className={styles.small} >
            <Link to="recipe/13" 
              style={{backgroundImage:"url(https://source.unsplash.com/YNMjGIPgD_c/750x750)"}} >
                Mojito Mocktails
            </Link>
          </li>
          <li className={styles.large} >
            <Link to="recipe/17" 
              style={{backgroundImage:"url(https://source.unsplash.com/TbgRGRSwlNo/1000x500)"}} >
                Broiled Lobster Tails
            </Link>
          </li>
          <li className={styles.large} >
            <Link to="recipe/16" 
              style={{backgroundImage:"url(https://source.unsplash.com/UeYkqQh4PoI/1000x500)"}} >
                Perfect Prime Rib
            </Link>
          </li>
          <li className={styles.small}>
            <Link to="recipe/18" 
              style={{backgroundImage:"url(https://source.unsplash.com/yuAEcsAe4lk/750x750)"}} >
                Spritz Cookies
            </Link>
          </li>
        </ul>
      </section>

      <section className={styles.eventContainer}>
        <h3 className={styles.sectionTitle}>Special Events</h3>
        <p>We offer a variety of special events. Whether you've cooked or don't even know what bake and roast are, we've got the perfect events for you. </p>
        <hr />

        <ul className={styles.eventGrid}>
          <li>
            <h4>Asian Workshop</h4>
            <p>Interested in sushi and noodle? Consider coming along with one of our experts. They'll show you secrets that you're likely to miss otherwise.</p>
          </li>
          <li>
            <h4>Harvesting Field Trip</h4>
            <p>Want to experience nature's beauty without all of that annoying exercise? Take a farm tour on one of our special events.</p>
          </li>			
          <li>
            <h4>Wine Night</h4>
            <p>If you are looking for friends and wine, attend this event and have a wonderful night. We'll provide music and desserts too!</p>
          </li>			
          <li>
            <h4>Cake Class</h4>
            <p>Try to bakery? Sign up for our fun and educational cake classs! From the novice to the professional, we has a class for you!</p>
          </li>
        </ul>
      </section>

      <section className={styles.contactContainer}>
        <h3 className={styles.sectionTitle}>Learn more</h3>
        <p>
          Want to keep update for our recipes or know about our upcoming events? 
          <br/>Just sign up for our mailing list.</p>
        <hr />
        <Link to="/signUp" className={styles.contactBtn}>Sign Up Now</Link>
      </section>
    </div>
  )
};


export default Home;
