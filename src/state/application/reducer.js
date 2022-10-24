import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import {updateChainId} from  './actions';
const initialState = {
    chainId: 1,
}
export const fetchPost = createAsyncThunk(updateChainId, async (data) => {
    console.log('------updateChianId,---')
    return data
})
export default createReducer(initialState,(builder)=>
    builder
        .addCase(fetchPost.fulfilled,(state,action)=>{
            console.log(state.chainId, 'state1111',action.payload)
        })
        .addCase(updateChainId,(state,action)=>{
            console.log(state.chainId, 'state',action.payload)
        })
)
