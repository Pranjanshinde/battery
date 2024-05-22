import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as usereducer } from "./User/reducer";
import { reducer as todoreducer } from "./todos/reducer";
import { thunk } from "redux-thunk";


const combined=combineReducers({
usereducer,todoreducer
});

export const store=legacy_createStore(combined,applyMiddleware(thunk));