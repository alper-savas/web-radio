import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const EventsRootLayout = () => {
  return (
    <div>
      <Helmet>
        <title>Events - Radiant Radio</title>
      </Helmet>
      <Outlet />
    </div>
  );
};

export default EventsRootLayout;
