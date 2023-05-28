import { Fragment, React } from "react";
import Hero from "../components/Hero";
import PicksSlider from "../components/PicksSlider";
import Schedule from "../components/Schedule";
import EventsSlider from "../components/EventsSlider";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Radiant Radio</title>
      </Helmet>
      <Hero />
      <PicksSlider />
      <Schedule />
      <EventsSlider />
    </Fragment>
  );
};

export default HomePage;
