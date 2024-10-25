'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
  loggedIn: boolean | null | undefined;
  login: (jwt: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const logout = () => {
    setLoggedIn(false);

    Cookies.remove('authorization', { path: '' });
    window.location.href = '/';
  };

  const login = useCallback((jwt: string) => {
    const payload_str: string = jwt.split('.')[1];
    const decodedPayload: string = Buffer.from(payload_str, 'base64').toString('utf-8');
    const payload_obj = JSON.parse(decodedPayload);

    if (payload_obj.exp > Date.now() / 1000) {
      setLoggedIn(true);
      return;
    }

    logout();
  }, []);

  useEffect(() => {
    const jwt = Cookies.get('authorization');
    if (jwt) {
      login(jwt);
    }
  }, [login]);

  return <AuthContext.Provider value={{ loggedIn, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => useContext(AuthContext);
