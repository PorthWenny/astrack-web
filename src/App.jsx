import Home from "./routes/homepage/Home";
import FacilityPage from "./routes/facilitypage/FacilityPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/singlepage/SinglePage";
import Login from "./routes/loginpage/Login";
import Profile from "./routes/profilepage/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/facility",
          element: <FacilityPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
