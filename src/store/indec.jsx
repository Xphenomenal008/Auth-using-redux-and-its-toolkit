import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

//reducer function 

const initialState = { counter: 0, showcounter: true };
const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment(state){
            state.counter++
        }
        ,
        decrement(state){
            state.counter--
        },
        incrementL(state,action){
            state.counter=state.counter+action.payload
        },
        showcounter(state){
            state.showcounter=!state.showcounter
        }
    }
})

const Authslice=createSlice({
    name:"auth",
    initialState:{isAuth:false},
    reducers:{
        login(state){
            state.isAuth=true
        },
        logout(state){
            state.isAuth=false
        }
    }
})


//our centralized store
const Store= configureStore({
    reducer:{
        counter:counterSlice.reducer,
        auth:Authslice.reducer
    }
})
export default Store
export const counterActions=counterSlice.actions
export const authActions=Authslice.actions