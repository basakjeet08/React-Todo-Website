import { Outlet, Link } from "react-router-dom";
import "./index.css";

function MainLayout() {
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
      </header>

      <Outlet />

      <footer>
        <p>Created with ❤️ and ☕ by Anirban Basak</p>
      </footer>
    </>
  );
}

export default MainLayout;
