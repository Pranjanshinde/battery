import { Route, Routes } from "react-router-dom";
import Mytodos from "../pages/Mytodos";
import Otherstodos from "../pages/Othertodo";
import Createother from "../pages/Createforother";
import Edittodos from "../pages/Edittodos";
import Loginpage from "../pages/Loginpage";
import PrivateRoute from "./Privateroute";


function Allroutes(){

    return (
        <Routes>
            <Route path="/" element={<PrivateRoute><Mytodos/></PrivateRoute>}/>
            <Route path="/othertodo" element={<PrivateRoute><Otherstodos/></PrivateRoute>} />
            <Route path="/createother" element={<PrivateRoute><Createother/></PrivateRoute>} />
            <Route path="/edit/:id" element={<PrivateRoute><Edittodos/></PrivateRoute>} />
            <Route path="/login" element={<Loginpage/>} />

        </Routes>
    )
}

export default Allroutes;