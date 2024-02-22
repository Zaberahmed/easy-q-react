import App from "@/App";
import NotFoundPage from "@/components/not-found";
import AuthLayout from "@/pages/auth/layout";
import LoginPage from "@/pages/auth/login";
import SignUpPage from "@/pages/auth/sign-up";
import Home from "@/pages/dashboard/home";
import DashboardLayout from "@/pages/dashboard/layout";
import Profile from "@/pages/dashboard/profile";
import Questions from "@/pages/dashboard/questions";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "auth",
        element: <AuthLayout />,

        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "signup",
            element: <SignUpPage />,
          },
        ],
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,

        children: [
          {
            path: "home",
            element: <Home />,
            index: true,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "questions",
            element: <Questions />,
          },
        ],
      },
    ],
  },
]);
