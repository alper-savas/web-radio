import { NavLink } from "react-router-dom";
import { useState } from "react";
import classes from "./MainNavigation.module.css";
import mainLogo from "../assets/images/main-logo.png";

const MainNavigation = () => {
  const [buttonState, setButtonState] = useState(false);

  const handleButtonState = () => {
    if (buttonState === true) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  };

  return (
    <header>
      <nav className={classes.mainNav}>
        <NavLink className={classes.logo} to="/">
          <img className={classes.logoImg} src={mainLogo} alt=""></img>
          <p>Radiant Radio</p>
        </NavLink>
        <div className={classes.broadcastSection}>
          <audio
            onPlay={handleButtonState}
            onPause={handleButtonState}
            src="//stream.radiojar.com/q1mgvh4u4yzuv?1685127245"
            controls
            className={
              buttonState === false
                ? `${classes.playState}`
                : `${classes.pauseState}`
            }
          ></audio>
          <p>Live</p>
          <div className={`${classes.circle} ${classes.red}`}></div>
        </div>
        <ul className={classes.mainNavList}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${classes.mainNavItem} ${classes.active}`
                  : classes.mainNavItem
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${classes.mainNavItem} ${classes.active}`
                  : classes.mainNavItem
              }
              to="/picks"
            >
              Picks
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${classes.mainNavItem} ${classes.active}`
                  : classes.mainNavItem
              }
              to="/events"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${classes.mainNavItem} ${classes.active}`
                  : classes.mainNavItem
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.filler}></div>
    </header>
  );
};

export default MainNavigation;
