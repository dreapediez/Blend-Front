import { useCallback } from "react";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
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
      try {
        localStorage.setItem("token", token);

        const userData: JwtPayloadCustom = decodeToken(token);

        dispatch(loginUserActionCreator(userData));
      } catch (error: unknown) {
        dispatch(
          showModalActionCreator({
            isError: true,
            modalText: `Something went wrong, please try again in a few minutes`,
          })
        );
      }
    },
    [dispatch]
  );

  const removeToken = useCallback((): void => {
    localStorage.removeItem("token");

    dispatch(removeUserActionCreator());
  }, [dispatch]);

  const getToken = (): string | null => {
    const token = localStorage.getItem("token");

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
