import { NavLink } from "react-router-dom";
import { useState } from "react";
import classes from "./MainNavigation.module.css";
import { ReactComponent as LogoSvg } from "../assets/radio-outline.svg";
import { ReactComponent as PlayIcon } from "../assets/play-outline.svg";
import { ReactComponent as PauseIcon } from "../assets/pause-outline.svg";

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
        <div className={classes.logo}>
          <LogoSvg />
        </div>
        <div className={classes.broadcastSection}>
          <button className={classes.playIcon} onClick={handleButtonState}>
            {buttonState === false ? <PauseIcon /> : <PlayIcon />}
          </button>
          <p>Live</p>
        </div>
        <ul className={classes.mainNavList}>
          <li>
            <NavLink className={classes.mainNavItem} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.mainNavItem} to="/shows">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.mainNavItem} to="/artists">
              Picks
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.mainNavItem} to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
