import * as t from "../types";

const initialState = {
  apiPosts: [],
  isLoading: false,
  error: "",
  totalPages: 0,
  limit: 10,
  page: 1,
};

const apiPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_API_POSTS:
      return { ...state, apiPosts: action.apiPosts, isLoading: false };

    case t.SET_IS_LOADING:
      return { ...state, isLoading: action.flag };

    case t.GET_ERROR:
      return { ...state, error: action.error, isLoading: false };

    case t.SET_TOTAL_PAGES:
      return { ...state, totalPages: action.totalPages };

    case t.SET_CURRENT_PAGE:
      return { ...state, page: action.page };

    default:
      return state;
  }
};

export default apiPostsReducer;
