import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export default class ApiServices {
  static async getPosts(limit, page) {
    const response = await axios.get(
      BASE_URL + `posts?_limit=${limit}&_page=${page}`
    );
    return response;
  }

  static async getUsersOrUser(userId) {
    const uriParams = userId ? `users/${userId}` : `users`;

    const { data } = await axios.get(BASE_URL + uriParams);
    return data;
  }

  static async getTodos(searchTitle) {
    const queryParams = searchTitle ? `todos?title=${searchTitle}` : `todos`;

    const { data } = await axios.get(BASE_URL + queryParams);
    return data;
  }
}
