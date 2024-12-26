import { Outlet, Link, useNavigate } from "react-router-dom";
import "./index.css";

function MainLayout() {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    localStorage.setItem("token", null);
    navigate("/login");
  };

  return (
    <>
      <header>
        <h1>Reactive Todos</h1>

        <ul>
          <Link to="/add-todo">
            <li>Add TODO</li>
          </Link>

          <Link to="/">
            <li>Show TODO</li>
          </Link>

          <Link to="add-categories">
            <li>Add Categories</li>
          </Link>

          <Link to="show-categories">
            <li>Show Categories</li>
          </Link>
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
