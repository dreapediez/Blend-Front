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
          modalText: `The register has been successful`,
        })
      );
    } catch {
      dispatch(
        showModalActionCreator({
          isError: true,
          modalText: `The register has not been successful`,
        })
      );
    }
  };
  return { registerUser };
};

export default useUser;
