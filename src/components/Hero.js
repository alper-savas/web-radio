import classes from "./Hero.module.css";
import heroImage from "../assets/images/hero-background.webp";
import { events } from "../data/homepageData";
import { Link } from "react-router-dom";

const Hero = () => {
  const id = events.filter((event) => event.name === "Pattern Live")[0].id;

  return (
    <div className={classes.heroContainer}>
      <div className={classes.imgContainer}>
        <img src={heroImage} alt="Logo" className={classes.heroImg} />
      </div>
      <Link to={`/events/${id}`}>
        <button className={classes.heroButton}>Algorave Takeover</button>
      </Link>

      <p className={classes.heroText}>
        Listen back to back artists, broadcasted all day long in solidarity.
      </p>
    </div>
  );
};

export default Hero;
