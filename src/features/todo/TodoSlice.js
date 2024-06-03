import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id:1, text : "task 1"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const task = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(task)
        },
        removeTask: (state, action) => {
            state.todos = state.todos.filter((task)=> task.id !== action.payload)
        },
    }
})

export const {addTask, removeTask} = todoSlice.actions

export default todoSlice.reducer

