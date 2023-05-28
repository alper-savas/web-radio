import AboutItem from "../components/AboutItem";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About - Radiant Radio</title>
      </Helmet>
      <AboutItem />
    </div>
  );
};

export default AboutPage;
