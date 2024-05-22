import { Card,CardBody,Image,Stack,Heading,Text,Divider,CardFooter,Button,ButtonGroup, Box,Progress,  } from "@chakra-ui/react";
import { Select } from '@chakra-ui/react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Deletetodos, Edittodo, GetTodod, handleDownload } from "../redux/todos/action";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import {ArrowDownIcon} from "@chakra-ui/icons";



const initdata=[
  {
    
  title : "BFFDBDBD",
  desc : "F24F2F2FF2F",
  date : "20-05-2024",
  status:"INCOMPLETE",
  user_id:"sdDSDSADASF",
  image:"https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/f/e/x/59-151516-vincent-chase-original-imahyqannh3ztajx.jpeg?q=70"
  },
  {
    
    title : "BFFDBDBD",
    desc : "F24F2F2FF2F",
    date : "20-05-2024",
    status:"INCOMPLETE",
    user_id:"sdDSDSADASF",
    image:"https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/f/e/x/59-151516-vincent-chase-original-imahyqannh3ztajx.jpeg?q=70"
    },
    {
    
      title : "BFFDBDBD",
      desc : "F24F2F2FF2F",
      date : "20-05-2024",
      status:"INCOMPLETE",
      user_id:"sdDSDSADASF",
      image:"https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/f/e/x/59-151516-vincent-chase-original-imahyqannh3ztajx.jpeg?q=70"
      },
      {
    
        title : "BFFDBDBD",
        desc : "F24F2F2FF2F",
        date : "20-05-2024",
        status:"INCOMPLETE",
        user_id:"sdDSDSADASF",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/f/e/x/59-151516-vincent-chase-original-imahyqannh3ztajx.jpeg?q=70"
        }

];

function Mytodos(){
const navigate=useNavigate();
const dispatch=useDispatch();
const isloading=useSelector((state)=>{
  return state.todoreducer.isloading
});

const notify = () => toast.info("Deletion Successfull",{
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

const notify1 = () => toast.info("Updation Successfull",{
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

console.log(isloading);

let  user=JSON.parse(localStorage.getItem("user"));

// function Updatestatus(id,data)
// {
//   var index;
//   console.log(id,data.liable);


//   for(let i=0;i<data.liable.length;i++)
//   {
//     if(user.name==data.liable[i])
//     {
//       index=i;
//       console.log(i);
//       data.count[index]=true;
//       break;
//     }
//   }
//   console.log(index);
  
//   let score=0;
//   console.log(data.count);

//   for( let i=0;i<data.count.length;i++)
//   {
//     if(data.count[i]==true)
//     {
//       score=score+10;
//     }
//   }
//   let marks=(data.count.length)*10;
//   let total=((score/marks)*100);
//   console.log(total);
//   data.progress=total;
//   console.log(total);
//   if(total==100)
//   {
//     data.status="completed";
//   }
//   dispatch(Edittodo(id,data))
//   notify1();


// }

function getDown()
{
  dispatch(handleDownload(user?._id));
}




var mytodos=useSelector((state)=>{
  console.log(state.todoreducer.todos);
  return state.todoreducer.todos
}) || [];


useEffect(()=>{
  
  dispatch(GetTodod());
},[]);


function deletedodos(id){
dispatch(Deletetodos(id));
notify()
}





    return(
       isloading ? <Box  marginLeft={{ base: "50px", md: "400px" }} w={"1100px"}><Stack>
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
       <Skeleton height='20px' />
     </Stack></Box> :
       <>
        <Box w={"90%"}  margin={"auto"} marginLeft={{ base: "50px", md: "400px" }} width={"80%"}>
        
        <Button rightIcon={<ArrowDownIcon />} colorScheme='blue' variant='outline' margin={"auto"} alignSelf={"center"} marginTop={"25px"} onClick={getDown}>
   Download Todos
  </Button>
                  <Table variant="striped" colorScheme="brand" marginTop={"80px"} width={"1000px"}>
  <TableCaption fontSize={"30px"}>Todos</TableCaption>
  <Thead>
    <Tr>
      <Th>Image</Th>
      <Th>Title</Th>
      <Th >Description</Th>
      <Th >Due Date</Th>
      <Th >Status</Th>
      <Th >Edit</Th>
      <Th >Delete</Th>
    </Tr>
  </Thead>
  <Tbody>
   {
    mytodos.map((item,index)=>{
      return(
        <Tr>
          <Td><Image src={item.image} alt="abc" boxSize={"80px"} borderRadius={"full"}/></Td>
          <Td>{item.title}</Td>
          <Td>{item.desc}</Td>
          <Td>{item.date}</Td>
          <Td>{item.status}</Td>
          <Td><Button bg={"#3333cc"} size="sm" color={"white"} onClick={()=>{navigate(`/edit/${item._id}`)}}>
    Edit
  </Button></Td>
  <Td><Button bg={"#ffcc00"} size="sm" color={"white"} variant={"outline"} onClick={()=>{
    deletedodos(item._id)
  }}>
    Delete
  </Button></Td>
        </Tr>
      )
    })
   }
  </Tbody>
  
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
      
 
</Table>
        
      
        </Box>
        </>
      
    )
}

export default Mytodos;