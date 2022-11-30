import { act, renderHook, waitFor } from "@testing-library/react";
import axios, { AxiosError } from "axios";
import { makeWrapperMockStore, mockStore } from "../../mocks/makeWrapper";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { ShowModalActionPayload } from "../../types/modalTypes";
import {
  UserCredentials,
  UserRegisterCredentials,
} from "../../types/userTypes";
import useUser from "./useUser";

const dispatchSpy = jest.spyOn(mockStore, "dispatch");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given an useUser hook", () => {
  describe("When it's function registerUser is called with a username: Leonidas,  password: 12345678, email: leonidas@hotmail.com", () => {
    test("Then it should call dispatch function showModalActionCreator with isError false and text 'You have been register correctly'", async () => {
      const {
        result: { current },
      } = renderHook(() => useUser(), {
        wrapper: makeWrapperMockStore,
      });

      const newUser: UserRegisterCredentials = {
        username: "Leonidas",
        password: "12345678",
        email: "leonidas@hotmail.com",
      };

      await act(() => {
        current.registerUser(newUser);
      });

      await waitFor(() => {
        expect(dispatchSpy).toHaveBeenCalled();
      });
    });
  });

  describe("When its method registerUser is invoked with username 'Leonidas', that is already in the database", () => {
    test("Then it should call dispatch function showModalActionCreator with isError true and text 'Something went wrong, please try again in a few minutes'", async () => {
      const {
        result: { current },
      } = renderHook(() => useUser(), {
        wrapper: makeWrapperMockStore,
      });

      const newUser: UserRegisterCredentials = {
        username: "",
        password: "",
        email: "",
      };

      const expectedPayload: ShowModalActionPayload = {
        isError: true,
        modalText: "Something went wrong, please try again in a few minutes",
      };

      await act(() => {
        axios.post = jest.fn().mockRejectedValue(new Error());
        current.registerUser(newUser);
      });

      await waitFor(() => {
        expect(dispatchSpy).toHaveBeenCalledWith(
          showModalActionCreator(expectedPayload)
        );
      });
    });

    describe("When its method registerUser is invoked with username 'Leo', that is invalid", () => {
      test("Then it should call dispatch function showModalActionCreator with isError true and text 'Wrong credentials, please try again. Tea time is waiting'", async () => {
        const {
          result: { current },
        } = renderHook(() => useUser(), {
          wrapper: makeWrapperMockStore,
        });

        const newUser: UserRegisterCredentials = {
          username: "Leo",
          password: "",
          email: "",
        };

        const expectedPayload: ShowModalActionPayload = {
          isError: true,
          modalText: "Wrong credentials, please try again. Tea time is waiting",
        };

        await act(() => {
          axios.post = jest.fn().mockRejectedValue(new AxiosError());
          current.registerUser(newUser);
        });

        await waitFor(() => {
          expect(dispatchSpy).toHaveBeenCalledWith(
            showModalActionCreator(expectedPayload)
          );
        });
      });
    });
  });

  describe("When it's function loginUser is called with a username: Leonidas and a password: 12345678", () => {
    test("Then it should call dispatch function showModalActionCreator with isError false and text `Just in time, It's almost tea moment`", async () => {
      const {
        result: { current },
      } = renderHook(() => useUser(), {
        wrapper: makeWrapperMockStore,
      });

      const userLogged: UserCredentials = {
        username: "Leonidas",
        password: "12345678",
      };

      await act(() => {
        current.loginUser(userLogged);
      });

      await waitFor(() => {
        expect(dispatchSpy).toHaveBeenCalled();
      });
    });
  });

  describe("When its method loginUser is called with a username: Leonidas and wrong password", () => {
    test("Then it should call dispatch function showModalActionCreator with isError true and text 'Something went wrong, please try again in a few minutes'", async () => {
      const {
        result: { current },
      } = renderHook(() => useUser(), {
        wrapper: makeWrapperMockStore,
      });

      const userNotLogged: UserCredentials = {
        username: "",
        password: "",
      };

      const expectedPayload: ShowModalActionPayload = {
        isError: true,
        modalText: "Something went wrong, please try again in a few minutes",
      };

      await act(() => {
        axios.post = jest.fn().mockRejectedValue(new Error());
        current.loginUser(userNotLogged);
      });

      await waitFor(() => {
        expect(dispatchSpy).toHaveBeenCalledWith(
          showModalActionCreator(expectedPayload)
        );
      });
    });
  });

  describe("When it's function logoutUser is called", () => {
    test("Then it should exectue the remove action that returns it to the initial state", async () => {
      const {
        result: { current },
      } = renderHook(() => useUser(), {
        wrapper: makeWrapperMockStore,
      });

      await act(() => {
        current.logoutUser();
      });

      await waitFor(() => {
        expect(dispatchSpy).toHaveBeenCalled();
      });
    });
  });
});
