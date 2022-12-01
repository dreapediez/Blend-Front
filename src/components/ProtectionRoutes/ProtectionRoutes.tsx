import { Navigate, useLocation } from "react-router-dom";
import useToken from "../../hooks/useToken/useToken";

const ProtectionRoutes = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const { pathname } = useLocation();
  const { getToken } = useToken();
  const token = getToken();

  if (["/login", "/register", "/"].includes(pathname)) {
    return token ? <Navigate to="/calendar" /> : children;
  }

  return token ? children : <Navigate to="/" />;
};

export default ProtectionRoutes;
