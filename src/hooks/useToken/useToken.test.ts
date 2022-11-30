import { act, renderHook, waitFor } from "@testing-library/react";
import { makeWrapper, makeWrapperMockStore } from "../../mocks/makeWrapper";
import mockToken from "../../mocks/mockToken";
import useToken from "./useToken";

// const spyDispatch = jest.spyOn(mockStore, "dispatch");

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a useToken hook", () => {
  describe("When it's function getToken is called with user data but without token", () => {
    test("Then it should call dispatch function removeTokenActionCreator", async () => {
      const {
        result: { current },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapperMockStore,
      });

      await act(() => {
        window.localStorage.clear();

        current.getToken();
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalled();
      });
    });
  });

  describe("When it's function getToken is called without user data but with token", () => {
    test("And then it should call dispatch function removeUserActionCreator", async () => {
      const {
        result: { current },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapper,
      });

      await act(() => {
        window.localStorage.setItem("token", mockToken);

        current.getToken();
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalled();
      });
    });
  });

  describe("When it's function loadToken is called with a specific token parameters", () => {
    test("Then it should call dispatch function loadTokenActionCreator", async () => {
      const {
        result: { current },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapperMockStore,
      });

      await act(() => {
        current.loadToken(mockToken);
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalled();
      });
    });
  });

  describe("When it's function loadToken is called with an empty token parameters", () => {
    test("Then it should call dispatch function loadTokenActionCreator", async () => {
      const {
        result: { current },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapperMockStore,
      });

      await act(() => {
        current.loadToken("");
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalled();
      });
    });
  });
});
