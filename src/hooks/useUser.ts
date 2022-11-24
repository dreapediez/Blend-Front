import { UserRegisterCredentials } from "../types/userTypes";

const useUser = () => {
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
    } catch (error: unknown) {
      throw new Error(
        `There was an error with the register: ${(error as Error).message}`
      );
    }
  };
  return { registerUser };
};

export default useUser;
