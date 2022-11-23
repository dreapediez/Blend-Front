import AppStyled from "./AppStyled";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

const App = () => {
  return (
    <AppStyled>
      <Routes>
        <Route path="*" element={<WelcomePage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
