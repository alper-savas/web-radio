import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const PicksRootLayout = () => {
  return (
    <div>
      <Helmet>
        <title>Picks - Radiant Radio</title>
      </Helmet>
      <Outlet />
    </div>
  );
};

export default PicksRootLayout;
