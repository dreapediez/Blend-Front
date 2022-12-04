import axios from "axios";
import { useCallback } from "react";
import {
  loadAllPostsActionCreator,
  loadOnePostActionCreator,
  deletePostActionCreator,
} from "../../redux/features/postSlice/postSlice";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
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
      dispatch(showLoadingActionCreator());
      const response = await axios.get(`${url}/posts`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const apiResponse: {
        posts: PostStructure[];
      } = response.data;
      dispatch(hideLoadingActionCreator());
      dispatch(
        loadAllPostsActionCreator(
          apiResponse.posts.sort((a, b) => a.day - b.day)
        )
      );
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

  const deletePost = useCallback(
    async (idPost: string) => {
      try {
        dispatch(showLoadingActionCreator());
        const response = await axios.delete(`${url}/posts/delete/${idPost}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const apiResponse: PostStructure = response.data;

        dispatch(deletePostActionCreator(apiResponse.id));
        await loadAllPosts();
        dispatch(hideLoadingActionCreator());
        dispatch(
          showModalActionCreator({
            isError: false,
            modalText: "Post deleted successfully",
          })
        );
      } catch (error: unknown) {
        dispatch(
          showModalActionCreator({
            isError: true,
            modalText: `Something went wrong, please try again in a few minutes`,
          })
        );
      }
    },
    [dispatch, token, url]
  );

  return { loadAllPosts, loadOnePost, deletePost };
};

export default useApi;
