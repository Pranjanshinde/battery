import { SINGLE_TODO, TODO_FAILURE, TODO_REQUEST, TODO_SUCCESS } from "./actiontypes"

const initstate={
    isloading:false,
    iserror:false,
    todos:[],
    singletodo:{}
}


export const reducer = (state=initstate,{type,payload})=>{

    switch(type){
        case TODO_REQUEST :
            return{
                ...state,isloading:true
            }
        case TODO_FAILURE:
            return{...state,iserror:true}  
            
        case TODO_SUCCESS :
            return {...state,todos:payload,isloading:false}
        case SINGLE_TODO :
            return {...state,singletodo:payload}  
            default:return state      
    }
}