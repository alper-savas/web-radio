import classes from "./Schedule.module.css";
import scheduleImage from "../assets/images/schedule.png";
import { ReactComponent as SoundLogo } from "../assets/logo-soundcloud.svg";
import { ReactComponent as InstaLogo } from "../assets/logo-instagram.svg";
import { ReactComponent as FaceLogo } from "../assets/logo-facebook.svg";
import { ReactComponent as MailLogo } from "../assets/mail-outline.svg";
import { schedule } from "../data/homepageData";
import { useState } from "react";

const Schedule = () => {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date();
  let day = weekday[date.getDay()];

  const [clickedDay, setClickedDay] = useState(day);

  const handleButtonClick = (event) => {
    setClickedDay(event.target.value);
  };

  return (
    <div className={classes.sectionContainer}>
      <div className={classes.leftSection}>
        <img src={scheduleImage} alt="Schedule"></img>
        <div className={classes.logos}>
          <a href="https://soundcloud.com/">
            <SoundLogo />
          </a>
          <a href="https://www.instagram.com/">
            <InstaLogo />
          </a>
          <a href="https://www.facebook.com/">
            <FaceLogo />
          </a>
          <a href="mailto:radiantradiolive@gmail.com">
            <MailLogo />
          </a>
        </div>
      </div>
      <div className={classes.rightSection}>
        <div className={classes.buttons}>
          <button
            onClick={handleButtonClick}
            value="Mon"
            className={`${clickedDay === "Mon" && classes.active}`}
          >
            Mon
          </button>
          <button
            onClick={handleButtonClick}
            value="Tue"
            className={`${clickedDay === "Tue" && classes.active}`}
          >
            Tue
          </button>
          <button
            onClick={handleButtonClick}
            value="Wed"
            className={`${clickedDay === "Wed" && classes.active}`}
          >
            Wed
          </button>
          <button
            onClick={handleButtonClick}
            value="Thu"
            className={`${clickedDay === "Thu" && classes.active}`}
          >
            Thu
          </button>
          <button
            onClick={handleButtonClick}
            value="Fri"
            className={`${clickedDay === "Fri" && classes.active}`}
          >
            Fri
          </button>
          <button
            onClick={handleButtonClick}
            value="Sat"
            className={`${clickedDay === "Sat" && classes.active}`}
          >
            Sat
          </button>
          <button
            onClick={handleButtonClick}
            value="Sun"
            className={`${clickedDay === "Sun" && classes.active}`}
          >
            Sun
          </button>
        </div>
        <div className={classes.scheduleContainer}>
          <ul>
            {schedule
              .filter((el) => el.day === clickedDay)
              .map((el) => {
                return (
                  <li key={el.id}>
                    <div className={classes.schedule}>
                      <div className={classes.time}>{el.time}</div>
                      <div className={classes.artist}>{el.artist}</div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
