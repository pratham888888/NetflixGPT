import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import GPTReducer from "./GPTSlice"

const appStore= configureStore({
    reducer:{
        user: userReducer,
        movies: movieReducer,
        gpt: GPTReducer
    },
}  
);
export default appStore;