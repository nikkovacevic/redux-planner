import { createSlice } from '@reduxjs/toolkit'
import uuid from 'react-uuid'

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state,action) => {
            const newTask = {
                id: uuid(),
                name: action.payload.taskName,
                description: action.payload.description,
                color: action.payload.color,
                priority: action.payload.priority,
            }
            state.push(newTask)
        },
         deleteTask: (state,action) => {
            return state.filter((task) => task.id !== action.payload.id);
         },
     }
})

export const {addTask, deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;