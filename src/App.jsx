import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RegisterUser from "./pages/RegisterUser";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
    return(
       <Router>
        <Routes>
            <Route path="/register" element={<RegisterUser/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/forgot-password" element={<ResetPassword />} />
        </Routes>
       </Router> 
    )
}

export default App;