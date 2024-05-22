import { Alert } from "@chakra-ui/react";
import { SINGLE_TODO, TODO_FAILURE, TODO_REQUEST, TODO_SUCCESS } from "./actiontypes";
import axios from 'axios';
import { Navigate } from "react-router-dom";

function todorequest(){
    return{
        type:TODO_REQUEST
    }
};

function todofail(){
    return{
        type:TODO_FAILURE
    }
}

function todoyahoo(payload)
{
    return{
        type:TODO_SUCCESS,
        payload:payload
    }
}

function singles(payload)
{
    return {
        type:SINGLE_TODO,
        payload:payload
    }
}


export const GetTodod = () => (dispatch)=>{
    let token=localStorage.getItem('token');
    let user=JSON.parse(localStorage.getItem("user"))
    // console.log(token,obj);
    const config={
        headers:{
            authorization:token
        },
      
    }
    dispatch(todorequest());
    axios.get(`https://battery-2iim.onrender.com/todo?user_id=${user._id}`,config)
  .then(function (response) {
    // handle success
    console.log(response.data);
    dispatch(todoyahoo(response.data))
  
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    dispatch(todofail);
  })
}

export const Getsingle = (id) => (dispatch)=>{
    let token=localStorage.getItem('token');
    // console.log(token,obj);
    const config={
        headers:{
            authorization:token
        },
      
    }
    dispatch(todorequest);
    axios.get(`https://battery-2iim.onrender.com/todo/${id}`,config)
  .then(function (response) {
    // handle success
    console.log(response.data,1);
    dispatch(singles(response.data));
  
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    dispatch(todofail);
  })
}


export const Posttodos = (data) =>(dispatch)=>{
    let token=localStorage.getItem('token');
    // let user=JSON.parse(localStorage.getItem("user"))
    console.log(token,data);
    const config={
        headers:{
            authorization:token
        }
    }

    axios.post(`https://battery-2iim.onrender.com/todo`,data,config)
    .then(function (response) {
      // handle success
      console.log(response.data);
    //  alert(response.data.msg);
     window.location.reload();
    
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      dispatch(todofail);
    })
  }

  export const Deletetodos = (id) =>(dispatch)=>{
    let token=localStorage.getItem('token');
    // let user=JSON.parse(localStorage.getItem("user"))
    console.log(token);
    const config={
        headers:{
            authorization:token
        }
    }

    axios.delete(`https://battery-2iim.onrender.com/todo/${id}`,config)
    .then(function (response) {
      // handle success
      console.log(response.data);
    //  alert(response.data.msg);
    setTimeout(()=>{
      window.location.reload();
  },3000);
     
    
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      dispatch(todofail);
    })
  }

  export const Edittodo = (id,data,navigate) =>(dispatch)=>{
    let token=localStorage.getItem('token');
    // let user=JSON.parse(localStorage.getItem("user"))
    console.log(token,data);
    const config={
        headers:{
            authorization:token
        }
    }

    axios.patch(`https://battery-2iim.onrender.com/todo/${id}`,data,config)
    .then(function (response) {
      // handle success
      console.log(response.data);
    //  alert(response.data.msg);
    //  window.location.reload();

    setTimeout(()=>{
      navigate("/");
  },3000);
    
    
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      dispatch(todofail);
    })
  }

  export const handleDownload = (user_id) => async(dispatch)=>{
    try {
      let token=localStorage.getItem('token');

      const response = await axios({
        url: `https://battery-2iim.onrender.com/todo/download-pdf?user_id=${user_id}`,
        method: 'GET',
        responseType: 'blob', // Important
        headers: {
          authorization: token // Add your token here
        }
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'data.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading the PDF', error);
    }
  };
