import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import {
  UserCredentials,
  UserRegisterCredentials,
} from "../../types/userTypes";
import useToken from "../useToken/useToken";

const useUser = () => {
  const { loadToken } = useToken();
  const dispatch = useAppDispatch();
  const url = process.env.REACT_APP_API_URL!;

  const registerUser = async (userData: UserRegisterCredentials) => {
    try {
      const responseData = await fetch(`${url}/users/register`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!responseData.ok) {
        throw new Error("There is an strage error");
      }

      dispatch(
        showModalActionCreator({
          isError: false,
          modalText: `You are already one of the Blendcommunity`,
        })
      );
    } catch {
      dispatch(
        showModalActionCreator({
          isError: true,
          modalText: `Something went wrong, please try again in a few minutes`,
        })
      );
    }
  };

  const loginUser = async (userData: UserCredentials) => {
    try {
      const responseData = await fetch(`${url}/users/login`, {
        method: "POST",
        body: JSON.stringify({
          username: userData.username,
          password: userData.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!responseData.ok) {
        throw new Error("There is an strage error");
      }
      const { accessToken: token } = await responseData.json();

      loadToken(token);

      dispatch(
        showModalActionCreator({
          isError: false,
          modalText: `Just in time, It's almost tea moment`,
        })
      );
    } catch (error: unknown) {
      dispatch(
        showModalActionCreator({
          isError: true,
          modalText: `Wrong credentials, please try again. Tea time is waiting`,
        })
      );
    }
  };
  return { registerUser, loginUser };
};

export default useUser;
