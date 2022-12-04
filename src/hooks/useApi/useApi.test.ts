import { act, renderHook, waitFor } from "@testing-library/react";
import axios, { AxiosError } from "axios";
import { postMock } from "../../mocks/listOfPostsMock";
import { makeWrapperMockStore } from "../../mocks/makeWrapper";
import mockToken from "../../mocks/mockToken";
import {
  deletePostActionCreator,
  loadOnePostActionCreator,
} from "../../redux/features/postSlice/postSlice";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { ShowModalActionPayload } from "../../types/modalTypes";
import useApi from "./useApi";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

beforeAll(() => {
  localStorage.setItem("token", mockToken);
});

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
    test("Then dispatch should invoke loadOnePostActionCreator with a one post", async () => {
      const idToLoad = postMock.id;

      const {
        result: { current },
      } = renderHook(() => useApi(), {
        wrapper: makeWrapperMockStore,
      });

      await act(() => {
        current.loadOnePost(idToLoad);
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          loadOnePostActionCreator(postMock)
        );
      });
    });
  });

  describe("When its method loadOnePost is wrongly invoked", () => {
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
        current.loadOnePost("");
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          showModalActionCreator(expectedPayload)
        );
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

  describe("When its method deletePost is invoked with an invalid action", () => {
    test("Then dispatch should invoke deletePostActionCreator with an isError true and text 'Something went wrong, please try again in a few minutes'", async () => {
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
        axios.delete = jest.fn().mockRejectedValue(new AxiosError());
        current.deletePost("");
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          showModalActionCreator(expectedPayload)
        );
      });
    });
  });

  describe("When its method deletePost is invoked with an id to delte", () => {
    test("Then dispatch should invoke deletePostActionCreator with an isError false", async () => {
      const idToDelete = "638b38336f2e824ae4cd3a03";
      const {
        result: { current },
      } = renderHook(() => useApi(), {
        wrapper: makeWrapperMockStore,
      });

      await current.deletePost(idToDelete);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          deletePostActionCreator(idToDelete)
        );
      });
    });
  });
});
