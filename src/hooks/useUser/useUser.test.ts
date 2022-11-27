import { act, renderHook, waitFor } from "@testing-library/react";
import { makeWrapperMockStore, mockStore } from "../../mocks/makeWrapper";
import {
  UserCredentials,
  UserRegisterCredentials,
} from "../../types/userTypes";
import useUser from "./useUser";

const dispatchSpy = jest.spyOn(mockStore, "dispatch");

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
    test("Then it should call dispatch function showModalActionCreator with isError true and text 'There was an error with the register'", async () => {
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

      await act(() => {
        current.registerUser(newUser);
      });

      await waitFor(() => {
        expect(dispatchSpy).toHaveBeenCalled();
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
    test("Then it should call dispatch function showModalActionCreator with isError true and text 'Wrong credentials, please try again. Tea time is waiting'", async () => {
      const {
        result: { current },
      } = renderHook(() => useUser(), {
        wrapper: makeWrapperMockStore,
      });

      const userNotLogged: UserCredentials = {
        username: "",
        password: "",
      };

      await act(() => {
        current.loginUser(userNotLogged);
      });

      await waitFor(() => {
        expect(dispatchSpy).toHaveBeenCalled();
      });
    });
  });
});
