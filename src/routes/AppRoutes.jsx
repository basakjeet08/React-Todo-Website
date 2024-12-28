import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ShowTodoPage from "../page/ShowTodoPage";
import RegisterPage from "../page/RegisterPage";
import LoginPage from "../page/LoginPage";
import PrivateRoutes from "./PrivateRoutes";
import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* This path is the Home TODO Page which is a private route */}
          <Route
            path="/"
            element={
              <PrivateRoutes>
                <ShowTodoPage />
              </PrivateRoutes>
            }
          />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Root Layout to show Error Pages */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
