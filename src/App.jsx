import Routes from "./routes";
import {AuthProvider} from "./context";

export default function App() {
   return(
      <AuthProvider>
        <Routes/> 
      </AuthProvider>
    );
}

