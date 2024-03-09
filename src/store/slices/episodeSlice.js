import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState={
    episodes: [],
    prev:null,
    next:null
}

const getAllEpisodes = createAsyncThunk(
    'episodesSlice/getAllEpisodes',
    async ({page},thunkAPI)=>{
        try {
            const {data} = await episodeService.getAll(page)
            return data
        }catch (e) {
           return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const episodesSlice = createSlice({
    name:'episodeSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getAllEpisodes.fulfilled, (state, action) => {
                const {info:{prev, next}, results} = action.payload
                state.prev = prev
                state.next = next
                state.episodes = results
            })
})

const {reducer:episodesReducer, actions} = episodesSlice

const episodesActions={
    ...actions,
    getAllEpisodes
}

export {episodesActions, episodesReducer}