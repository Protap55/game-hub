import MainLayout from "../Layouts/MainLayout";
import AllGamelayout from "../Layouts/AllGamelayout";
import Home from "../Pages/Home/Home";
import AllGames from "../Pages/AllGames/AllGames";
import GameDetails from "../Pages/GameDetails/GameDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import ForgetPassword from "../Pages/Login/ForgetPassword";
import ProtectedRoute from "./ProtectedRoute";
import PopularGamesDetails from "../Components/PopularGamesDetails";
import { createBrowserRouter } from "react-router";
import NotFoundPage from "../Pages/NotFound/NotFoundPage";
import MyProfile from "../Pages/Profile/MyProfile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import UpdateGame from "../Pages/GameDetails/UpdateGame";
import Loading from "../Pages/Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await fetch("/popularGames.json");
          if (!res.ok) throw new Error("Failed to load popular games");
          return res.json();
        },
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/game-details/:id",
        element: (
          <ProtectedRoute>
            <PopularGamesDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    element: <AllGamelayout />,
    children: [
      {
        path: "/all-games",
        element: <AllGames />,
        loader: async () => {
          const res = await fetch("/allGames.json");
          if (!res.ok) throw new Error("Failed to load all games");
          return res.json();
        },
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/game/:id",
        element: <GameDetails />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/about", element: <About /> },
      { path: "/forget-password", element: <ForgetPassword /> },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>,
      },
      {
        path: "/my-profile",
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/update-game/:id",
        element: (
          <ProtectedRoute>
            <UpdateGame />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
