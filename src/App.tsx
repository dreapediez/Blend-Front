import AppStyled from "./AppStyled";
import { Routes, Route, useLocation } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import { useAppSelector } from "./redux/hooks";

const App = () => {
  const { pathname } = useLocation();
  const {
    modal: { modalText, isError, showModal },
  } = useAppSelector((action) => action.ui);

  return (
    <AppStyled>
      {"/" !== pathname && <Header />}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      {showModal && (
        <Modal type={isError ? "error" : "success"} text={modalText} />
      )}
    </AppStyled>
  );
};

export default App;
