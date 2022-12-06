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
    dispatch(showLoadingActionCreator());
    try {
      const response = await axios.get(`${url}/posts`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const apiResponse: {
        posts: PostStructure[];
      } = response.data;
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
    } finally {
      dispatch(hideLoadingActionCreator());
    }
  }, [dispatch, token, url]);

  const loadOnePost = useCallback(
    async (idPost: string) => {
      dispatch(showLoadingActionCreator());
      try {
        const response = await axios.get(`${url}/posts/post/${idPost}`);

        const apiResponse = response.data;

        dispatch(loadOnePostActionCreator(apiResponse));
      } catch (error: unknown) {
        dispatch(
          showModalActionCreator({
            isError: true,
            modalText: `Something went wrong, please try again in a few minutes`,
          })
        );
      } finally {
        dispatch(hideLoadingActionCreator());
      }
    },
    [dispatch, url]
  );

  const deletePost = useCallback(
    async (idPost: string) => {
      dispatch(showLoadingActionCreator());
      try {
        await axios.delete(`${url}/posts/delete/${idPost}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(deletePostActionCreator(idPost));
        await loadAllPosts();
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
      } finally {
        dispatch(hideLoadingActionCreator());
      }
    },
    [dispatch, loadAllPosts, token, url]
  );

  const createPost = useCallback(
    async (post: Partial<PostStructure>) => {
      dispatch(showLoadingActionCreator());
      try {
        const response = await axios.post(`${url}/posts/create`, post, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        const apiResponse: PostStructure = response.data;

        dispatch(loadOnePostActionCreator(apiResponse));

        dispatch(
          showModalActionCreator({
            isError: false,
            modalText: "Post created successfully",
          })
        );
      } catch (error: unknown) {
        dispatch(
          showModalActionCreator({
            isError: true,
            modalText: `Something went wrong, please try again in a few minutes`,
          })
        );
      } finally {
        dispatch(hideLoadingActionCreator());
      }
    },
    [dispatch, token, url]
  );

  return { loadAllPosts, loadOnePost, deletePost, createPost };
};

export default useApi;
