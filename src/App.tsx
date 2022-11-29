import AppStyled from "./AppStyled";
import { Routes, Route, useLocation } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import { useAppSelector } from "./redux/hooks";
import LogInPage from "./pages/LogInPage/LogInPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Loading from "./components/Loading/Loading";
import CalendarPage from "./pages/ClaendarPage/CalendarPager";

const App = () => {
  const { pathname } = useLocation();
  const {
    isLoading,
    modal: { modalText, isError, showModal },
  } = useAppSelector((action) => action.ui);

  return (
    <AppStyled>
      {["/register", "/login", "/calendar"].includes(pathname) && <Header />}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
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
