import { Outlet, useNavigate, NavLink } from "react-router-dom";
import "./index.css";

function MainLayout() {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

  return (
    <>
      <header>
        <h1>Reactive Todos</h1>

        <ul>
          <NavLink to="/add-todo">
            <li>Add TODO</li>
          </NavLink>

          <NavLink to="/">
            <li>Show TODO</li>
          </NavLink>

          <NavLink to="add-categories">
            <li>Add Categories</li>
          </NavLink>

          <NavLink to="show-categories">
            <li>Show Categories</li>
          </NavLink>
        </ul>

        <button className="logout-btn" onClick={onLogoutClick}>
          Logout
        </button>
      </header>

      <Outlet />

      <footer>
        <p>Created with ❤️ and ☕ by Anirban Basak</p>
      </footer>
    </>
  );
}

export default MainLayout;
