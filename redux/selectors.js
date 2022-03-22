// posts
export const getPosts = (state) => state.postsPage.posts;
export const getIsModal = (state) => state.postsPage.isModal;
export const getCurrentPost = (state) => state.postsPage.currentPost;

// api posts
export const getApiPosts = (state) => state.listPage.apiPosts;
export const getIsLoading = (state) => state.listPage.isLoading;
export const getError = (state) => state.listPage.error;

// pagination
export const getTotalPages = (state) => state.listPage.totalPages;
export const getLimit = (state) => state.listPage.limit;
export const getCurrentPage = (state) => state.listPage.page;
