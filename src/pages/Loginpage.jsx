import { Box, Button, Heading,Input,Select,Divider  } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Getuser, Login, Register } from "../redux/User/action";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initreg={
    name:"",
    email:"",
    password:"",
    profile:""
}

const initlog={
    email:"",
    password:""
}


function Loginpage(){
    const [reg,setReg]=useState(initreg);
    const [logs,setLogs]=useState(initlog);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const notify = () => toast.info("Login Successfull",{
        position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: "Bounce",
    });

    const notify1 = () => toast.info("Registration Successfull",{
        position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: "Bounce",
    });

    useEffect(()=>{
        dispatch(Getuser());
    },[]);



    function registered(data){
        console.log(data);
        dispatch(Register(data));
        notify1();
        // window.location.reload();
        setTimeout(()=>{
            window.location.reload(); 
        },3000);
    }

    function userlogin(data,navigate)
    {
        console.log(data);
        dispatch(Login(data,navigate));
        notify();
    }

    function regdata(e)
    {
        setReg({...reg,[e.target.name]:e.target.value});
    }

    function setlog(e)
    {
        setLogs({...logs,[e.target.name]:e.target.value});
    }

    return(
        
        <Box  width={{ base: "350px", md: "1100px" }} marginLeft={{ base: "70px", md: "400px" }} h={"500px"} display={{ base: "block", md: "flex" }} justifyContent={"space-between"} marginTop={"20px"}> 
            <Box w={{base:"80%",md:"48%"}} padding={"20px"} gap={"10px"} borderRadius={"10px"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;"} marginBottom={{base:"20px",md:"0px"}}>
                <Heading size={"lg"} marginBottom={"17px"}>Login Form</Heading>
                <Input variant='flushed' placeholder='Email' borderBottom={"1px solid blue"} name="email" onChange={setlog}/>
            <Input variant='flushed' placeholder='Password' borderBottom={"1px solid blue"} type="Password" name="password" onChange={setlog}/>
            <Button bg={"blue"} color={"white"} marginTop={"20px"} onClick={()=>{userlogin(logs,navigate)}}>Log In</Button>
            <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={"Bounce"}
            color="white"
            background-color="#002244"
            />
            </Box>
            <Divider borderColor="blue" borderWidth="2px" orientation={{ base: "horizontal", md: "vertical" }} />
            <Box  w={{base:"80%",md:"48%"}} padding={"20px"} gap={"10px"} borderRadius={"10px"} boxShadow={" rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;"} marginTop={{base:"20px",md:"0px"}}>
            <Heading size={"lg"} marginBottom={"17px"}>Registration Form</Heading>
            <Input variant='flushed' placeholder='Name' borderBottom={"1px solid blue"} name="name" onChange={regdata}/>
            <Input variant='flushed' placeholder='profile' borderBottom={"1px solid blue"}  name="profile" onChange={regdata}/>
               
                <Input variant='flushed' placeholder='Email' borderBottom={"1px solid blue"} name="email" onChange={regdata}/>
            <Input variant='flushed' placeholder='Password' borderBottom={"1px solid blue"} type="Password" name="password" onChange={regdata}/>
           
    
            <Button bg={"blue"} color={"white"} marginTop={"20px"} onClick={()=>{registered(reg)}}>Register</Button>
            </Box>

        </Box>
        
    )
}

export default Loginpage;