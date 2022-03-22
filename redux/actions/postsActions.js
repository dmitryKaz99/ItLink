import * as t from "../types";

export const addPost = (post) => ({ type: t.ADD_POST, post });
export const deletePost = (currentId) => ({ type: t.DELETE_POST, currentId });
export const updatePost = (currentId, post) => ({
  type: t.UPDATE_POST,
  currentId,
  post,
});
export const setCurrentPost = (currentPost) => ({
  type: t.SET_CURRENT_POST,
  currentPost,
});
export const setIsModal = (flag) => ({ type: t.SET_IS_MODAL, flag });
