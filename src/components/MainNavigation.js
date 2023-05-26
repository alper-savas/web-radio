import { NavLink } from "react-router-dom";
import { useState } from "react";
import classes from "./MainNavigation.module.css";
import { ReactComponent as PlayIcon } from "../assets/play-outline.svg";
import { ReactComponent as PauseIcon } from "../assets/pause-outline.svg";
import mainLogo from "../assets/images/main-logo.png";

const MainNavigation = () => {
  const [buttonState, setButtonState] = useState(false);

  const handleButtonState = () => {
    setButtonState((prevState) => {
      if (prevState === true) {
        setButtonState(false);
      } else {
        setButtonState(true);
      }
    });
  };

  return (
    <header>
      <nav className={classes.mainNav}>
        <NavLink className={classes.logo} to="/">
          <img className={classes.logoImg} src={mainLogo} alt=""></img>
          <p>Radiant Radio</p>
        </NavLink>
        <div className={classes.broadcastSection}>
          <button className={classes.playIcon} onClick={handleButtonState}>
            {buttonState === false ? <PauseIcon /> : <PlayIcon />}
          </button>
          <p>Live</p>
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
