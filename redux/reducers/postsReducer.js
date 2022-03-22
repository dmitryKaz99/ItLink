import * as t from "../types";

const initialState = {
  posts: [
    {
      id: 1,
      title: "JavaScript/test",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum...",
    },
    {
      id: 2,
      title: "Python/test",
      body: "...is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      id: 3,
      title: "Java/test",
      body: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text...",
    },
  ],
  currentPost: null,
  isModal: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_POST:
      let i = state.posts.length ? state.posts[state.posts.length - 1].id : 0;
      const title = action.post.title,
        body = action.post.body;

      return { ...state, posts: [...state.posts, { id: ++i, title, body }] };

    case t.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.currentId),
        isModal: false,
      };

    case t.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((p) => {
          const { currentId } = action,
            title = action.post.title,
            body = action.post.body;

          if (p.id === currentId) return { id: currentId, title, body };
          return p;
        }),
        isModal: false,
      };

    case t.SET_CURRENT_POST:
      return { ...state, currentPost: action.currentPost, isModal: true };

    case t.SET_IS_MODAL:
      return { ...state, isModal: action.flag };

    default:
      return state;
  }
};

export default postsReducer;
