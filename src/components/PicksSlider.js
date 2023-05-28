import { Fragment } from "react";
import classes from "./PicksSlider.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { ReactComponent as ChevronBack } from "../assets/chevron-back-sharp.svg";
import { ReactComponent as ChevronForward } from "../assets/chevron-forward-sharp.svg";
import { picksImages, responsive } from "../data/homepageData";
import { useState } from "react";

const PicksSlider = () => {
  const [id, setId] = useState(null);

  const handleMouseEnter = (id) => {
    setId(id);
  };

  const handleMouseLeave = () => {
    setId(null);
  };

  return (
    <Fragment>
      <div className={classes.picks}>Monthly Picks</div>
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
        {picksImages.map((image) => {
          return (
            <Link
              key={image.id}
              to={`/picks/${image.id}`}
              className={`${classes.picksImage} ${
                id === image.id && classes.picksImageHover
              }`}
              onMouseEnter={() => handleMouseEnter(image.id)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <div>
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
            </Link>
          );
        })}
      </Carousel>
    </Fragment>
  );
};

export default PicksSlider;
