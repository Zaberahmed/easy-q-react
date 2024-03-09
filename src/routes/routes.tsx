import App from "@/App";
import NotFoundPage from "@/components/not-found";
import AuthLayout from "@/pages/auth/layout";
import LoginPage from "@/pages/auth/login";
import SignUpPage from "@/pages/auth/sign-up";
import Home from "@/pages/dashboard/home";
import DashboardLayout from "@/pages/dashboard/layout";
import Profile from "@/pages/dashboard/profile";
import Questions from "@/pages/dashboard/questions";
import { Navigate, Route, Routes, createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        element: <AuthLayout />,

        children: [
          {
            path: "auth/login",
            element: <LoginPage />,
            index: true,
          },
          {
            path: "auth/signup",
            element: <SignUpPage />,
          },

          {
            path: "auth",
            element: (
              <Routes>
                <Route
                  path="*"
                  element={<Navigate to="/auth/login" />}
                />
              </Routes>
            ),
          },
        ],
      },
      {
        element: <DashboardLayout />,

        children: [
          {
            path: "dashboard/home",
            element: <Home />,
            index: true,
          },
          {
            path: "dashboard/profile",
            element: <Profile />,
          },
          {
            path: "dashboard/questions",
            element: <Questions />,
          },

          {
            path: "dashboard",
            element: (
              <Routes>
                <Route
                  path="*"
                  element={<Navigate to="/dashboard/home" />}
                />
              </Routes>
            ),
          },
        ],
      },
    ],
  },
]);
