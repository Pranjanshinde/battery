import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom";


 const PrivateRoute=({children})=>{
// const auth=useSelector((state)=>state.usereducer.isauth);
const token=localStorage.getItem("token");
console.log(token)
const location=useLocation();

if(!token)
{
    return <Navigate path="/login" state={location.pathname} replace={true} />
}else
{
    return children ;
}


}

export default PrivateRoute;