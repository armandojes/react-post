import api from 'app/api';
import { useSetSession } from 'app/context/session';
import useSetNotification from 'app/hooks/useSetNotification';
import { useState } from 'react';

const useLogin = (config = {}) => {
  const [loading, setLoading] = useState(false);
  const setSession = useSetSession();
  const setNotification = useSetNotification();

  const login = async (email, password) => {
    setLoading(true);
    const response = await api.users.login(email, password);
    if (response.error) {
      setNotification(response.errorMessage, 'error');
      setLoading(false);
    } else {
      if (config.onSuccess) config.onSuccess();
      setLoading(false);
      setSession({ token: response.token, ...response.userData });
    }
    return response;
  };

  return {
    login,
    loading,
  };
};

export default useLogin;
