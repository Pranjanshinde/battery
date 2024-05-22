import { Box, Input, Text,Button,Card, Heading} from "@chakra-ui/react";
import { Select,CardBody } from '@chakra-ui/react';
import { useState,useEffect } from "react";
import {CloseIcon} from "@chakra-ui/icons"
import { useDispatch } from "react-redux";
import { Posttodos } from "../redux/todos/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initdata=JSON.parse(localStorage.getItem("users"));

const mainuser=JSON.parse(localStorage.getItem("user"));


const inidate={
    title:"",
    desc:"",
    date:"",
    status:"Not_started",
    image:  ""
}



function Createother(){
const [user,setUser]=useState([]);
const [data,setData]=useState(inidate);
const dispatch=useDispatch();
const notify = () => toast.info("Todo created successfully",{
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

function changedata(e)
{
    setData({...data,[e.target.name]:e.target.value});
}

// function getuser(name){
//     setUser([...user,name]);
// }

function sendPost(data){

data.user_id=mainuser?._id;
// console.log(data);
dispatch(Posttodos(data));
notify();
}





    return(
        <>
        <Box width={{ base: "280px", md: "900px" }} marginLeft={{ base: "70px", md: "500px" }} paddingTop={"35px"} borderRadius={"15px"} paddingBottom={"35px"}  marginTop={"20px"} >
            <Heading textAlign={"center"}>Fill Todo data</Heading>
            <Box  width={"90%"} margin={"auto"} height={"400px"} padding={"20px"} alignItems={"center"} textAlign={"center"} borderRadius={"12px"} boxShadow={"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;"} marginTop={"40px"}>
            <Input variant='flushed' placeholder='Title' borderBottom={"1px solid blue"} name="title" onChange={changedata}/>
            <Input variant='flushed' placeholder='Description' borderBottom={"1px solid blue"} name="desc" onChange={changedata}/>
            <Input placeholder='Select Date and Time' size='md' type='datetime-local' variant={"flushed"} borderBottom={"1px solid blue"} name="date" onChange={changedata}/>
            <Select placeholder='Select Status' variant='flushed' borderBottom={"1px solid blue"} name="priority" onChange={changedata}>
  <option value='not_started'>not_started</option>
  <option value='pending'>Pending</option>
  <option value='completed'>Completed</option>
</Select>
<Input variant='flushed' placeholder='image' borderBottom={"1px solid blue"} name="image" onChange={changedata}/>
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
<Button bg={"blue"} color={"white"} margin={"auto"} marginTop={"40px"} onClick={()=>{sendPost(data)}}>Add Todo</Button>
            </Box>
            
        </Box>
        </>
    )
}

export default Createother;