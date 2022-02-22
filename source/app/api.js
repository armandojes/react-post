import fetcher from './fetcher';

const api = {
  user: {
    login(email, password) {
      return fetcher({
        method: 'post',
        url: '/user/login',
        data: { email, password },
      });
    },
  },
};

export default api;
