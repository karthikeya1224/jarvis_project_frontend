import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RegisterUser from "./Pages/RegisterUser";
import Login from "./Pages/Login";

const App = () => {
    return(
       <Router>
        <Routes>
            <Route path="/register" element={<RegisterUser/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
       </Router> 
    )
}

export default App;