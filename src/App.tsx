import AppStyled from "./AppStyled";
import { Routes, Route, useLocation } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Header from "./components/Header/Header";

const App = () => {
  const { pathname } = useLocation();

  return (
    <AppStyled>
      {"/" !== pathname && <Header />}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
