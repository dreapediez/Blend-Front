import { currentUser } from "../../../mocks/makeWrapper";
import { UserState } from "../../../types/userTypes";
import {
  loginUserActionCreator,
  removeUserActionCreator,
  userInitialState,
  userReducer,
} from "./userSlice";

describe("Given a userReducer", () => {
  describe("When it receives the initial state and an unknown action", () => {
    test("Then it should return a copy of the intial state", () => {
      const unknownAction = {
        type: "unknown",
      };

      const newState = userReducer(userInitialState, unknownAction);

      expect(newState).toStrictEqual(userInitialState);
    });
  });

  describe("And its reducer loginUser is invoked", () => {
    describe("When it receives an initial state and a loginUser action with a new user in its payload", () => {
      test("Then it should isLogged property of the user", () => {
        const expectedState: UserState = {
          ...currentUser,
        };

        const newState = userReducer(
          userInitialState,
          loginUserActionCreator(expectedState)
        );

        expect(newState).toStrictEqual(expectedState);
      });
    });
  });

  describe("When its reducer removeUser is invoked", () => {
    test("Then the UserState should return to its initial state", () => {
      const currentState: UserState = {
        id: "",
        username: "",
        isLogged: true,
      };
      const expectedStated: UserState = {
        id: "",
        username: "",
        isLogged: false,
      };

      const newState = userReducer(currentState, removeUserActionCreator());

      expect(newState).toStrictEqual(expectedStated);
    });
  });
});
