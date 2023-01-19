import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"; 
const initData={
    name:'shaolong',
    age:20
}
const userSlice=createSlice({
    name: 'user',
    initialState: initData,
    reducers: {
        changeUserName:(state,action)=>{

            state.name=action.payload.user
        }
    }
})
export const {changeUserName}=userSlice.actions
export default userSlice.reducer