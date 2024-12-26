import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import TodoPage from "../page/TodoPage";
import RegisterPage from "../page/RegisterPage";
import LoginPage from "../page/LoginPage";
import PrivateRoutes from "./PrivateRoutes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This path is the Home TODO Page which is a private route */}
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <TodoPage />
            </PrivateRoutes>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Root Layout to show Error Pages */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
