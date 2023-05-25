import classes from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.radioInfo}>
        <h1>Root</h1>
        <p>
          Root Radio is an independent radio based in Istanbul broadcasting from
          all around the world.
        </p>
      </div>
      <div className={classes.quickLinks}>
        <h3>Quick Links</h3>
        <p>Contribute</p>
        <p>Support Us</p>
        <p>Archive</p>
        <p>About</p>
      </div>
      <div className={classes.contact}>
        <h3>Contact</h3>
        <p>Contact us at rootradiolive@gmail.com</p>
      </div>
      <div className={classes.newsletter}>
        <h3>Sign up to our newsletter</h3>
        <button>youremail@email.com</button>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MainFooter;
