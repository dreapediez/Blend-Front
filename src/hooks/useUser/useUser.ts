import { showModalActionCreator } from "../../redux/features/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import { UserRegisterCredentials } from "../../types/userTypes";

const useUser = () => {
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
  return { registerUser };
};

export default useUser;
