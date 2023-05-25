import classes from "./Schedule.module.css";
import scheduleImage from "../assets/images/schedule.png";
import { ReactComponent as SoundLogo } from "../assets/logo-soundcloud.svg";
import { ReactComponent as InstaLogo } from "../assets/logo-instagram.svg";
import { ReactComponent as FaceLogo } from "../assets/logo-facebook.svg";
import { ReactComponent as MailLogo } from "../assets/mail-outline.svg";

const Schedule = () => {
  return (
    <div className={classes.sectionContainer}>
      <div className={classes.leftSection}>
        <img src={scheduleImage} alt="Schedule"></img>
        <div className={classes.logos}>
          <SoundLogo />
          <InstaLogo />
          <FaceLogo />
          <MailLogo />
        </div>
      </div>
      <div className={classes.rightSection}>
        <div className={classes.buttons}>
          <button>Mon</button>
          <button>Tue</button>
          <button>Wed</button>
          <button>Thu</button>
          <button>Fri</button>
          <button>Sat</button>
          <button>Sun</button>
        </div>
        <div className={classes.schedule}></div>
      </div>
    </div>
  );
};

export default Schedule;
