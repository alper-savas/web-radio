import { useParams } from "react-router-dom";
import { picksImages } from "../data/homepageData";
import classes from "./PicksDetail.module.css";

const PicksDetail = () => {
  const params = useParams();
  const id = params.pickId;

  return (
    <div>
      {picksImages
        .filter((pick) => pick.id === id)
        .map((pick) => {
          return (
            <div className={classes.grid}>
              <img id={pick.id} src={pick.url} alt={pick.description}></img>
              <div className={classes.infoSide}>
                <h2>{pick.title}</h2>
                <h4>{pick.subtitle}</h4>
                <p>{pick.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PicksDetail;
