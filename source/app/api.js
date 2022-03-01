import fetcher from "./fetcher";

const api = {
  users: {
    login(email, password) {
      return fetcher({
        method: "post",
        url: "/users/login",
        data: { email, password },
      });
    },
  },
  posts: {
    getAll() {
      return fetcher({
        method: "get",
        url: "/posts",
      });
    },
    getByUrl(postUrl) {
      return fetcher({
        method: "get",
        url: `/posts/${postUrl}`,
      });
    },
  },
};

export default api;
