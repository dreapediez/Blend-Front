import AppStyled from "./AppStyled";
import { Routes, Route, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import Header from "../Header/Header";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import ProtectionRoutes from "../ProtectionRoutes/ProtectionRoutes";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LogInPage from "../../pages/LogInPage/LogInPage";
import CalendarPage from "../../pages/CalendarPage/CalendarPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import { useEffect } from "react";
import useToken from "../../hooks/useToken/useToken";

const App = () => {
  const { pathname } = useLocation();
  const { getToken } = useToken();
  const {
    isLoading,
    modal: { modalText, isError, showModal },
  } = useAppSelector((action) => action.ui);

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <AppStyled>
      {["/register", "/login", "/calendar"].includes(pathname) && <Header />}
      <Routes>
        <Route
          path="/"
          element={<ProtectionRoutes children={<WelcomePage />} />}
        />
        <Route
          path="/register"
          element={<ProtectionRoutes children={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<ProtectionRoutes children={<LogInPage />} />}
        />
        <Route
          path="/calendar"
          element={<ProtectionRoutes children={<CalendarPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {isLoading && <Loading />}
      {showModal && (
        <Modal type={isError ? "error" : "success"} text={modalText} />
      )}
    </AppStyled>
  );
};

export default App;
