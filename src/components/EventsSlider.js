import classes from "./EventsSlider.module.css";

import { Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { ReactComponent as ChevronBack } from "../assets/chevron-back-sharp.svg";
import { ReactComponent as ChevronForward } from "../assets/chevron-forward-sharp.svg";
import { events, responsive } from "../data/homepageData";
import { useState } from "react";

const EventsSlider = () => {
  const [id, setId] = useState(null);

  const handleMouseEnter = (id) => {
    setId(id);
  };

  const handleMouseLeave = () => {
    setId(null);
  };

  return (
    <Fragment>
      <div className={classes.events}>Events</div>
      <Carousel
        responsive={responsive}
        infinite={true}
        customLeftArrow={
          <button className={`${classes.chevron} ${classes.chevronBack}`}>
            <ChevronBack />
          </button>
        }
        customRightArrow={
          <button className={`${classes.chevron} ${classes.chevronForward}`}>
            <ChevronForward />
          </button>
        }
      >
        {events.map((event) => {
          return (
            <Link
              to={`/events/${event.id}`}
              className={`${classes.event} ${
                id === event.id && classes.eventHover
              }`}
              onMouseEnter={() => handleMouseEnter(event.id)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <div>
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
            </Link>
          );
        })}
      </Carousel>
    </Fragment>
  );
};

export default EventsSlider;
