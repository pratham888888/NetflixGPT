import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:{},
        popularMovies:{},
        upcomingMovies:{},
        topRatedMovies:{},
        videoTrailer:{},
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
               state.nowPlayingMovies= action.payload;
        },
        addPopularMovies:(state,action) =>{
            state.popularMovies= action.payload;
        },
        addUpcomingMovies:(state,action)=>{
           state.upcomingMovies= action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies= action.payload;
        },
        addVideoTrailer:(state,action)=>{
            state.videoTrailer= action.payload;
        }
    },
})


export const {addNowPlayingMovies,addVideoTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies}= movieSlice.actions;

export default movieSlice.reducer;