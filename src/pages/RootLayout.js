import { Outlet, useLoaderData } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import MainFooter from "../components/MainFooter";

const RootLayout = () => {
  // const data = useLoaderData();

  return (
    <div>
      <MainNavigation />
      <Outlet />
      <MainFooter />
    </div>
  );
};

export default RootLayout;

// export async function loader() {
//   fetch api data and return
// }
