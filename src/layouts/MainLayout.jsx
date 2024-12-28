import { Outlet, useNavigate } from "react-router-dom";
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
