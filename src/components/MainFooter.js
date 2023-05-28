import classes from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.radioInfo}>
        <h1>Radiant</h1>
        <p>
          Radiant Radio is an independent radio based in Berlin broadcasting
          from all around the world.
        </p>
      </div>
      <div className={classes.quickLinks}>
        <h3>Quick Links</h3>
        <a href="/">
          <p>Contribute</p>
        </a>
        <a href="/">
          <p>Support Us</p>
        </a>
        <a href="/">
          <p>Archive</p>
        </a>
        <a href="/">
          <p>About</p>
        </a>
      </div>
      <div className={classes.contact}>
        <h3>Contact</h3>
        <p>Contact us at radiantradiolive@gmail.com</p>
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
