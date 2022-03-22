import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import postsReducer from "./reducers/postsReducer";
import apiPostsReducer from "./reducers/apiPostsReducer";

const reducers = combineReducers({
  postsPage: postsReducer,
  listPage: apiPostsReducer,
});

const composeEnhancers =
  (typeof window != "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
