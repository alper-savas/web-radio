import { useParams } from "react-router-dom";
import { events } from "../data/homepageData";
import classes from "./EventsDetail.module.css";

const EventsDetail = () => {
  const params = useParams();
  const id = params.eventId;

  return (
    <div>
      {events
        .filter((event) => event.id === id)
        .map((event) => {
          return (
            <div className={classes.grid}>
              <img id={event.id} src={event.url} alt={event.description}></img>
              <div className={classes.infoSide}>
                <h2>{event.name}</h2>
                <h4>{event.date}</h4>
                <p>{event.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default EventsDetail;
