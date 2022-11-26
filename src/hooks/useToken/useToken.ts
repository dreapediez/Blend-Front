import { useCallback } from "react";
import {
  loginUserActionCreator,
  removeUserActionCreator,
} from "../../redux/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { JwtPayloadCustom } from "../../types/userTypes";
import decodeToken from "../../utils/decodeToken";
interface UseTokenStructure {
  getToken: () => string | null;
  loadToken: (token: string) => void;
  removeToken: () => void;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const loadToken = useCallback(
    (token: string): void => {
      window.localStorage.setItem("token", token);

      const user: JwtPayloadCustom = decodeToken(token);

      dispatch(loginUserActionCreator(user));
    },
    [dispatch]
  );

  const removeToken = useCallback((): void => {
    window.localStorage.removeItem("token");

    dispatch(removeUserActionCreator());
  }, [dispatch]);

  const getToken = (): string | null => {
    const token = window.localStorage.getItem("token");

    if (user.isLogged && !token) {
      removeToken();

      return null;
    }

    if (!user.isLogged && token) {
      loadToken(token);
    }

    return token;
  };

  return { getToken, removeToken, loadToken };
};

export default useToken;
