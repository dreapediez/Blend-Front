import { act, renderHook, waitFor } from "@testing-library/react";
import { makeWrapperMockStore, mockStore } from "../../mocks/makeWrapper";
import mockToken from "../../mocks/mockToken";
import useToken from "./useToken";

const spyDispatch = jest.spyOn(mockStore, "dispatch");

describe("Given a useToken hook", () => {
  describe("When it's function getToken is called with user data but without token", () => {
    test("Then it should call dispatch function removeTokenActionCreator", async () => {
      const {
        result: { current },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapperMockStore,
      });

      await act(() => {
        Object.defineProperty(window.localStorage, "getItem", {
          value: null,
        });

        current.getToken();
      });

      await waitFor(() => {
        expect(spyDispatch).toHaveBeenCalled();
      });
    });
  });

  describe("When it's function getToken is called without user data but with token", () => {
    test("And then it should call dispatch function removeUserActionCreator", async () => {
      const {
        result: { current },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapperMockStore,
      });

      await act(() => {
        // current.removeToken();

        Object.defineProperty(window.localStorage, "getItem", {
          value: mockToken,
        });

        window.localStorage.clear();

        current.getToken();
      });

      await waitFor(() => {
        expect(spyDispatch).toHaveBeenCalled();
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
        expect(spyDispatch).toHaveBeenCalled();
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
        expect(spyDispatch).toHaveBeenCalled();
      });
    });
  });
});
