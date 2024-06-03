import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/TodoSlice'
//initialize store

export const Store = configureStore({
    reducer: todoReducer
});