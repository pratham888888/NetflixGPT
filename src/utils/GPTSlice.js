import { createSlice } from "@reduxjs/toolkit";


const GPTSlice= createSlice({
    name: "Gpt",

    initialState: {
       showGPTSearch: false,
       text:"Search GPT"
    },

    reducers : {
       toggleGPTSearchView: (state) =>{
            state.showGPTSearch= !state.showGPTSearch
            if(state.text==="Search GPT"){
                 state.text="Home"
            }else{
               state.text="Search GPT"
            }
       }
    }
}
   
)

export const {toggleGPTSearchView} = GPTSlice.actions;

export default GPTSlice.reducer;