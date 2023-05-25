import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ShowsRootLayout from "./pages/ShowsRootLayout";
import ShowsPage from "./pages/ShowsPage";
import ShowDetailPage from "./pages/ShowsDetailPage";
import ArtistsRootLayout from "./pages/ArtistRootLayout";
import ArtistsPage from "./pages/ArtistsPage";
import ArtistDetailPage from "./pages/ArtistsDetailPage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shows",
        element: <ShowsRootLayout />,
        children: [
          {
            index: true,
            element: <ShowsPage />,
          },
          {
            path: ":showId",
            id: "show-detail",
            element: <ShowDetailPage />,
          },
        ],
      },
      {
        path: "artists",
        element: <ArtistsRootLayout />,
        children: [
          {
            index: true,
            element: <ArtistsPage />,
          },
          {
            path: ":artistId",
            id: "artist-detail",
            element: <ArtistDetailPage />,
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
