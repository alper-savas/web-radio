import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import EventsRootLayout from "./pages/EventsRootLayout";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import PicksRootLayout from "./pages/PicksRootLayout";
import PicksPage from "./pages/PicksPage";
import PicksDetailPage from "./pages/PicksDetailPage";
import AboutPage from "./pages/AboutPage";
// import loader data

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // loader: importedLoader
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "picks",
        element: <PicksRootLayout />,
        children: [
          {
            index: true,
            element: <PicksPage />,
          },
          {
            path: ":pickId",
            element: <PicksDetailPage />,
          },
        ],
      },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
          },
          {
            path: ":eventId",
            element: <EventDetailPage />,
          },
        ],
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
