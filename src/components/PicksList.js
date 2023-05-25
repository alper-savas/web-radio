import { picksImages } from "../data/homepageData";
import { NavLink } from "react-router-dom";
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
        {picksImages.map((image) => {
          return (
            <li>
              <NavLink
                className={`${classes.picksImage} ${
                  id === image.id && classes.picksImageHover
                }`}
                onMouseEnter={() => handleMouseEnter(image.id)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <div className={classes.innerContainer}>
                  <img
                    key={image.id}
                    id={image.id}
                    src={image.url}
                    alt={image.description}
                  ></img>
                  <div
                    className={`${classes.onHover} ${
                      id === image.id && classes.active
                    }`}
                  >
                    <h2>{image.title}</h2>
                    <p>{image.subtitle}</p>
                    <p className={classes.genre}>{image.genre}</p>
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

export default PicksList;
