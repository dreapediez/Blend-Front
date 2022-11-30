import { act, renderHook, waitFor } from "@testing-library/react";
import axios, { AxiosError } from "axios";
import { makeWrapperMockStore } from "../../mocks/makeWrapper";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { ShowModalActionPayload } from "../../types/modalTypes";
import useApi from "./useApi";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the custom hook useApi", () => {
  describe("When its method loadAllPosts is invoked", () => {
    test("Then dispatch should invoke loadAllPostsActionCreator with a list of posts", async () => {
      const {
        result: { current },
      } = renderHook(() => useApi(), {
        wrapper: makeWrapperMockStore,
      });

      await act(() => {
        current.loadAllPosts();
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalled();
      });
    });
  });

  describe("When its method loadOnePost is invoked", () => {
    test("Then dispatch should invoke loadOnePostActionCreator with a list of posts", async () => {
      const {
        result: { current },
      } = renderHook(() => useApi(), {
        wrapper: makeWrapperMockStore,
      });

      await act(() => {
        current.loadOnePost("1");
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalled();
      });
    });
  });

  describe("When its method loadAllPosts is invoked with an invalid action", () => {
    test("Then dispatch should invoke loadAllPostsActionCreator with an isError true and text 'Something went wrong, please try again in a few minutes'", async () => {
      const {
        result: { current },
      } = renderHook(() => useApi(), {
        wrapper: makeWrapperMockStore,
      });

      const expectedPayload: ShowModalActionPayload = {
        isError: true,
        modalText: "Something went wrong, please try again in a few minutes",
      };

      await act(() => {
        axios.get = jest.fn().mockRejectedValue(new AxiosError());
        current.loadAllPosts();
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          showModalActionCreator(expectedPayload)
        );
      });
    });
  });

  describe("When its method loadOnePost is invoked with an invalid action", () => {
    test("Then dispatch should invoke loadOnePostActionCreator with an isError true and text 'Something went wrong, please try again in a few minutes'", async () => {
      const {
        result: { current },
      } = renderHook(() => useApi(), {
        wrapper: makeWrapperMockStore,
      });

      const expectedPayload: ShowModalActionPayload = {
        isError: true,
        modalText: "Something went wrong, please try again in a few minutes",
      };

      await act(() => {
        axios.get = jest.fn().mockRejectedValue(new AxiosError());
        current.loadOnePost("1");
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          showModalActionCreator(expectedPayload)
        );
      });
    });
  });
});
