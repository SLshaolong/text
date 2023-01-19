import {configureStore} from '@reduxjs/toolkit'
import UserReducerSlice from '../slice/index'
const store=configureStore({reducer:{
    user:UserReducerSlice
}})

export default store