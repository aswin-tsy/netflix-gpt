import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({

    name: 'movies',
    initialState:{
        nowShowingMovies: null,
        videoTrailer: null,
    },
    reducers: {
        addNowShowingMovies: (state, action) => {
            state.nowShowingMovies = action.payload;
        },
        addVideoTrailer : (state, action) => {
            state.videoTrailer = action.payload;
        }
    }
});

export const {addNowShowingMovies,addVideoTrailer} = movieSlice.actions;
export default movieSlice.reducer;