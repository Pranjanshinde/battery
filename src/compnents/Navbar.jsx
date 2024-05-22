import { Link, useNavigate } from "react-router-dom";
import { Box,Text,Stack } from "@chakra-ui/react";
import {CalendarIcon,SmallAddIcon,StarIcon,LockIcon,UnlockIcon} from '@chakra-ui/icons';
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar(){
    const token = localStorage.getItem("token");
    const navigate=useNavigate();
    const notify = () => toast.info("Logout successfully",{
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

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
    async function logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("users");
        notify();
        await delay(3000);
        navigate("/login");
        // notify();
    }

    return(
        <>
        <Box  alignItems={"left"} height={"700px"} width={{ base: "50px", md: "300px" }} bgColor={"#002244"} borderRadius={{ base: "5px", md: "15px" }} color={"white"} position={"fixed"}  >
            <Box textAlign={"center"} fontSize={{ base: "7px", md: "40px" }} fontStyle={"italic"} marginBottom={"30px"}>
            🆃🅾🅳🅾🆂
            </Box>
            <Stack gap={0}>
            <Link to={"/"} >  <Box fontSize={"19px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} _hover={{bgColor:"#0076CE"}} padding={"20px"}  h={"21px"} >
                <CalendarIcon/>
            <Text display={{ base: "none", md: "block" }} >My todos</Text>
            </Box></Link>
          <br/>
          <Link to={"/createother"}>  <Box fontSize={"19px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} _hover={{bgColor:"#0076CE"}} padding={"20px"} h={"21px"} >
                <SmallAddIcon/>
            <Text display={{ base: "none", md: "block" }}>Create Todos</Text>
            </Box></Link>
           <br/>
           <Link to={"/othertodo"}>  <Box fontSize={"19px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} _hover={{bgColor:"#0076CE"}} padding={"20px"} h={"21px"}>
                <StarIcon/>
            <Text display={{ base: "none", md: "block" }}>My Profile</Text>
            </Box></Link>
            </Stack>
            <Box paddingTop={"350px"}>
                {
                    token?<Box fontSize={"19px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} _hover={{bgColor:"#0076CE"}} padding={"20px"} h={"21px"} onClick={logout}>
                    <LockIcon/>
                <Text display={{ base: "none", md: "block" }}>Logout</Text>
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
                </Box>:  <Link to={"/login"}> <Box fontSize={"19px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} _hover={{bgColor:"#0076CE"}} padding={"20px"} h={"21px"}>
                    <UnlockIcon/>
                <Text display={{ base: "none", md: "block" }}>Login</Text>
                </Box></Link>
                }
            
            </Box>
           
        </Box>
        </>
    )
}

export default Navbar;