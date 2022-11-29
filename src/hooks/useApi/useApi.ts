import { useCallback } from "react";
import { loadWindowsActionCreator } from "../../redux/features/windowSlice/windowSlice";
import { useAppDispatch } from "../../redux/hooks";
import { WindowApi } from "../../types/calendarTypes";

const useApi = () => {
  const dispatch = useAppDispatch();
  const url = process.env.REACT_APP_API_URL;

  const loadAllWindows = useCallback(async () => {
    try {
      const response = await fetch(`${url}calendar`);
      if (response.status !== 200) {
        throw new Error("No data found");
      }
      const apiResponse: WindowApi = await response.json();
      dispatch(loadWindowsActionCreator(apiResponse.windows));
    } catch (error: unknown) {
      throw new Error(`There was an error: ${(error as Error).message}`);
    }
  }, [dispatch, url]);

  return { loadAllWindows };
};

export default useApi;
