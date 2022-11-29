import axios, { AxiosError } from "axios";
import { useAppDispatch } from "../../redux/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import {
  AxiosResponseBody,
  UserCredentials,
  UserRegisterCredentials,
} from "../../types/userTypes";
import useToken from "../useToken/useToken";
import { useNavigate } from "react-router-dom";
import { removeUserActionCreator } from "../../redux/features/userSlice/userSlice";

const useUser = () => {
  const { loadToken } = useToken();
  const dispatch = useAppDispatch();
  const { getToken, removeToken } = useToken();
  const navigate = useNavigate();

  const url = process.env.REACT_APP_API_URL!;

  const registerUser = async (userData: UserRegisterCredentials) => {
    try {
      dispatch(showLoadingActionCreator());
      await axios.post(`${url}/users/register`, userData);

      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: false,
          modalText: `You are now a new member of Blendcommunity`,
        })
      );
      const token = getToken();

      if (token) {
        navigate("/calendar");
      }
    } catch (error: unknown) {
      if ((error as AxiosError).isAxiosError) {
        dispatch(
          showModalActionCreator({
            isError: true,
            modalText: "",
            // `Wrong credentials, please try again. Tea time is waiting`,
          })
        );
      } else {
        dispatch(
          showModalActionCreator({
            isError: true,
            modalText: `Something went wrong, please try again in a few minutes`,
          })
        );
      }
    }
  };

  const loginUser = async (userData: UserCredentials) => {
    try {
      dispatch(showLoadingActionCreator());
      const responseData = await axios.post(`${url}/users/login`, userData);

      const { accessToken: token } = responseData.data;

      loadToken(token);

      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: false,
          modalText: `Just in time, It's almost tea moment`,
        })
      );
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: true,
          modalText: `Something went wrong, please try again in a few minutes`,
        })
      );
    }
  };
  const logoutUser = () => {
    removeToken();

    dispatch(removeUserActionCreator());
  };

  return { registerUser, logoutUser, loginUser };
};

export default useUser;
