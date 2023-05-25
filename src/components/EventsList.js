import { events } from "../data/homepageData";
import { NavLink } from "react-router-dom";
import classes from "./EventsList.module.css";
import { useState } from "react";

const EventsList = () => {
  const [id, setId] = useState(null);

  const handleMouseEnter = (id) => {
    setId(id);
  };

  const handleMouseLeave = () => {
    setId(null);
  };

  return (
    <div>
      <ul className={classes.eventsGrid}>
        {events.map((event) => {
          return (
            <li>
              <NavLink
                className={`${classes.eventsImage} ${
                  id === event.id && classes.eventsImageHover
                }`}
                onMouseEnter={() => handleMouseEnter(event.id)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <div className={classes.innerContainer}>
                  <img
                    key={event.id}
                    id={event.id}
                    src={event.url}
                    alt={event.description}
                  ></img>
                  <div
                    className={`${classes.onHover} ${
                      id === event.id && classes.active
                    }`}
                  >
                    <h2>{event.name}</h2>
                    <p>{event.date}</p>
                  </div>
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EventsList;
