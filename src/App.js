import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./context/Auth";



function App() {

  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to='/login' />
    }
    return children
  }

  console.log(currentUser)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>}/>

        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
      
    </div>
  );
}

export default App;
