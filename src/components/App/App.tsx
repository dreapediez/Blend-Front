import AppStyled from "./AppStyled";
import { Routes, Route, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import ProtectionRoutes from "../ProtectionRoutes/ProtectionRoutes";
import { useEffect, lazy, Suspense } from "react";
import useToken from "../../hooks/useToken/useToken";
import Modal from "../Modal/Modal";
import Loading from "../Loading/Loading";
import Header from "../Header/Header";

const WelcomePageComponent = lazy(
  () => import("../../pages/WelcomePage/WelcomePage")
);
const RegisterPageComponent = lazy(
  () => import("../../pages/RegisterPage/RegisterPage")
);
const LogInPagePageComponent = lazy(
  () => import("../../pages/LogInPage/LogInPage")
);
const CalendarPageComponent = lazy(
  () => import("../../pages/CalendarPage/CalendarPage")
);
const PostsPageComponent = lazy(
  () => import("../../pages/PostsPage/PostsPage")
);
const NotFoundPageComponent = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage")
);

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
      {["/register", "/login", "/calendar", "/posts"].includes(pathname) && (
        <Header />
      )}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={<ProtectionRoutes children={<WelcomePageComponent />} />}
          />
          <Route
            path="/register"
            element={<ProtectionRoutes children={<RegisterPageComponent />} />}
          />
          <Route
            path="/login"
            element={<ProtectionRoutes children={<LogInPagePageComponent />} />}
          />
          <Route
            path="/calendar"
            element={<ProtectionRoutes children={<CalendarPageComponent />} />}
          />
          <Route
            path="/posts"
            element={<ProtectionRoutes children={<PostsPageComponent />} />}
          />
          <Route path="*" element={<NotFoundPageComponent />} />
        </Routes>
      </Suspense>
      {isLoading && <Loading />}
      {showModal && (
        <Modal type={isError ? "error" : "success"} text={modalText} />
      )}
    </AppStyled>
  );
};

export default App;
