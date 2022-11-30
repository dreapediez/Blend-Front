import { act, renderHook, waitFor } from "@testing-library/react";
import axios, { AxiosError } from "axios";
import { makeWrapperMockStore, mockStore } from "../../mocks/makeWrapper";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { ShowModalActionPayload } from "../../types/modalTypes";
import useApi from "./useApi";

const dispatchSpy = jest.spyOn(mockStore, "dispatch");

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
        expect(dispatchSpy).toHaveBeenCalled();
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
        axios.post = jest.fn().mockRejectedValue(new AxiosError());
        current.loadAllPosts();
      });

      await waitFor(() => {
        expect(dispatchSpy).toHaveBeenCalledWith(
          showModalActionCreator(expectedPayload)
        );
      });
    });
  });
});
