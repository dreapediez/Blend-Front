import { useCallback } from "react";
import { loadAllPostsActionCreator } from "../../redux/features/postSlice/postSlice";
import { useAppDispatch } from "../../redux/hooks";
import { PostStructure } from "../../types/postsTypes";

const useApi = () => {
  const dispatch = useAppDispatch();
  const url = process.env.REACT_APP_API_URL;

  const loadAllPosts = useCallback(async () => {
    try {
      const response = await fetch(`${url}calendar`);
      if (response.status !== 200) {
        throw new Error("No data found");
      }
      const apiResponse: PostStructure[] = await response.json();
      dispatch(loadAllPostsActionCreator(apiResponse));
    } catch (error: unknown) {
      throw new Error(`There was an error: ${(error as Error).message}`);
    }
  }, [dispatch, url]);

  return { loadAllPosts };
};

export default useApi;
