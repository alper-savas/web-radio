import { picksImages } from "../data/homepageData";
import { Link } from "react-router-dom";
import classes from "./PicksList.module.css";
import { useState } from "react";

const PicksList = () => {
  const [id, setId] = useState(null);

  const handleMouseEnter = (id) => {
    setId(id);
  };

  const handleMouseLeave = () => {
    setId(null);
  };

  return (
    <div>
      <ul className={classes.imagesGrid}>
        {picksImages.map((pick) => {
          return (
            <li key={pick.id}>
              <Link
                to={pick.id}
                className={`${classes.picksImage} ${
                  id === pick.id && classes.picksImageHover
                }`}
                onMouseEnter={() => handleMouseEnter(pick.id)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <div className={classes.innerContainer}>
                  <img
                    key={pick.id}
                    id={pick.id}
                    src={pick.url}
                    alt={pick.description}
                  ></img>
                  <div
                    className={`${classes.onHover} ${
                      id === pick.id && classes.active
                    }`}
                  >
                    <h2>{pick.title}</h2>
                    <p>{pick.subtitle}</p>
                    <p className={classes.genre}>{pick.genre}</p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PicksList;
