import classes from "./Hero.module.css";
import heroImage from "../assets/images/hero2-background.webp";

const Hero = () => {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.imgContainer}>
        <img src={heroImage} alt="Logo" className={classes.heroImg} />
      </div>
      <button className={classes.heroButton}>Deep House Takeover</button>
      <p className={classes.heroText}>
        Listen back to back artists, broadcasted all day long in solidarity.
      </p>
    </div>
  );
};

export default Hero;
