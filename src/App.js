import logo from './logo.svg';
import './App.css';
import Navbar from './compnents/Navbar';
import Allroutes from './compnents/Allroute';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <>
    <Box display={"flex"} >
    <Navbar/>
    <Box>
   <Allroutes/>
   </Box>
   </Box>
   
    </>
   
  );
}

export default App;
