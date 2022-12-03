import axios from "axios";
import { useCallback } from "react";
import {
  loadAllPostsActionCreator,
  loadOnePostActionCreator,
} from "../../redux/features/postSlice/postSlice";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import { PostStructure } from "../../types/postsTypes";
import useToken from "../useToken/useToken";

const useApi = () => {
  const dispatch = useAppDispatch();
  const url = process.env.REACT_APP_API_URL;
  const { getToken } = useToken();
  const token = getToken();

  const loadAllPosts = useCallback(async () => {
    try {
      const response = await axios.get(`${url}/posts`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const apiResponse: {
        posts: PostStructure[];
      } = response.data;
      dispatch(loadAllPostsActionCreator(apiResponse.posts));
    } catch (error: unknown) {
      dispatch(
        showModalActionCreator({
          isError: true,
          modalText: `Something went wrong, please try again in a few minutes`,
        })
      );
    }
  }, [dispatch, token, url]);

  const loadOnePost = useCallback(
    async (day: string) => {
      try {
        const response = await axios.get(`${url}/posts/post/${day}`);

        const apiResponse: PostStructure = response.data;

        dispatch(loadOnePostActionCreator(apiResponse));
      } catch (error: unknown) {
        dispatch(
          showModalActionCreator({
            isError: true,
            modalText: `Something went wrong, please try again in a few minutes`,
          })
        );
      }
    },
    [dispatch, url]
  );

  return { loadAllPosts, loadOnePost };
};

export default useApi;
