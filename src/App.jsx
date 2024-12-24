import TodoPage from "./page/TodoPage";
import RegisterPage from "./page/RegisterPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import LoginPage from "./page/LoginPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Outlet />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="home" element={<TodoPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
