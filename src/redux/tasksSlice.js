import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state,action) => {
            const newTask = {
                id: new Date(),
                name: action.payload.taskName,
                color: action.payload.color,
                completed: action.payload.completed
            }
            state.push(newTask)
        },
         deleteTask: (state,action) => {
            return state.filter((task) => task.id !== action.payload.id);
         }
     }
})

export const {addTask, deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;