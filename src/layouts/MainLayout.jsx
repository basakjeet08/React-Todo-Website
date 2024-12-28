import { Outlet, useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";

function MainLayout() {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

  return (
    <>
      <header className="flex flex-row align-baseline justify-between gap-4 shadow-lg py-4 px-8 bg-primary">
        <h1 className="text-secondary font-normal text-3xl cursor-pointer">
          Reactive Todos
        </h1>

        <PrimaryButton
          bgColor="secondary"
          color="primary"
          onClick={onLogoutClick}
        >
          Logout
        </PrimaryButton>
      </header>

      <Outlet />

      <footer className="flex justify-center p-4 text-text shadow-lg bg-primary">
        <p>Created with ❤️ and ☕ by Anirban Basak</p>
      </footer>
    </>
  );
}

export default MainLayout;
