import RegisterUser from "./Pages/RegisterUser";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
    return(
       <Router>
        <Routes>
            <Route path="/register" element={<RegisterUser/>}/>
        </Routes>
       </Router> 
    )
}

export default App;