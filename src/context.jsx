import { createContext } from 'react';
import auth from './services/auth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, loading, handleLogin, handleLogout } = auth();
  return (
    <Context.Provider value={{authenticated, loading, handleLogin, handleLogout}}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };