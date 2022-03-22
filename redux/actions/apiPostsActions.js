import * as t from "../types";
import ApiServices from "../../API/ApiServices";

//api posts
const setApiPosts = (apiPosts) => ({ type: t.SET_API_POSTS, apiPosts });
const setIsLoading = (flag) => ({ type: t.SET_IS_LOADING, flag });
const getError = (error) => ({ type: t.GET_ERROR, error });

// pagination
const setTotalPages = (totalPages) => ({ type: t.SET_TOTAL_PAGES, totalPages });
export const setCurrentPage = (page) => ({ type: t.SET_CURRENT_PAGE, page });

export const queryForApiPosts = (limit, page) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));

    const response = await ApiServices.getPosts(limit, page);
    dispatch(setApiPosts(response.data));

    const totalCount = response.headers["x-total-count"];
    dispatch(setTotalPages(totalCount));
  } catch (e) {
    dispatch(getError(e.message));
  }
};
