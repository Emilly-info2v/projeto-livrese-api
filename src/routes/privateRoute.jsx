import { Navigate } from "react-router-dom";
import auth from '../services/auth';

export function PrivateRoute({children}){
   const {  loading, authenticated } = auth();
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return authenticated ? children : <Navigate to="/login" replace={true} />;
}