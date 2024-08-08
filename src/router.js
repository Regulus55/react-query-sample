import { createBrowserRouter } from "react-router-dom";
import { Main, Signup, Login, Detail } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/:id",
    element: <Detail />,
  },
]);

export default router;
