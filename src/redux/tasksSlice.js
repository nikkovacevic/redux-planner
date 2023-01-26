import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state,action) => {
            const newTask = {
                id: new Date(),
                name: action.payload.taskName,
                description: action.payload.description,
                color: action.payload.color,
                priority: action.payload.priority,
                completed: action.payload.completed
            }
            state.push(newTask)
        },
         deleteTask: (state,action) => {
            return state.filter((task) => task.id !== action.payload.id);
         },
        countTasks: (state,action) => {
            return state.length;
        }
     }
})

export const {addTask, deleteTask, countTasks} = tasksSlice.actions;

export default tasksSlice.reducer;