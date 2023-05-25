import { Fragment, React } from "react";
import Hero from "../components/Hero";
import PicksSlider from "../components/PicksSlider";
import Schedule from "../components/Schedule";
import EventsSlider from "../components/EventsSlider";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <PicksSlider />
      <Schedule />
      <EventsSlider />
    </Fragment>
  );
};

export default HomePage;
