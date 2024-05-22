import { GET_USER, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontype";


const inistate={
    isauth:false,
    isloading:false,
    iserror:false,
    user:{},
    token:"",
    alluser:[]

}

export function reducer(state=inistate,{type,payload}){


    switch(type){
        case LOGIN_REQUEST :
            return {...state,isloading:true}

            case LOGIN_FAILURE :
                return {...state,iserror:true}

        case LOGIN_SUCCESS : 
        return {...state,token:payload.token,user:payload.user,isauth:true}

        case GET_USER :
            return {
                ...state,alluser:payload
            }

            default:return state



    }
       
};