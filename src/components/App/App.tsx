import AppStyled from "./AppStyled";
import { Routes, Route, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import ProtectionRoutes from "../ProtectionRoutes/ProtectionRoutes";
import { useEffect, lazy, Suspense } from "react";
import useToken from "../../hooks/useToken/useToken";
import Modal from "../Modal/Modal";
import Loading from "../Loading/Loading";
import Header from "../Header/Header";
import PostFormPage from "../../pages/PostFormPage/PostFormPage";

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
  () => import("../../pages/PostDetailPage/PostDetailPage")
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
      {["/register", "/login", "/calendar", "/new-post"].includes(pathname) && (
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
            path="/detail-post/:idPost"
            element={<ProtectionRoutes children={<PostsPageComponent />} />}
          />
          <Route
            path="/new-post"
            element={<ProtectionRoutes children={<PostFormPage />} />}
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
