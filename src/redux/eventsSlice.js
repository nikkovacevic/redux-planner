import { createSlice } from '@reduxjs/toolkit'
import uuid from 'react-uuid'
import { tasksSlice } from './tasksSlice.js';

export const eventsSlice = createSlice({
    name: 'events',
    initialState: [],
    reducers: {
        addEvent: (state, action) => {
            const newEvent = {
                id: uuid(),
                name: action.payload.eventName,
                description: action.payload.description,
                color: action.payload.color,
                date: action.payload.date
            }
            state.push(newEvent)
        },
        deleteEvent: (state,action) => {
            return state.filter((event) => event.id !== action.payload.id);
        }
    }
})

export const {addEvent, deleteEvent} = eventsSlice.actions;

export default eventsSlice.reducer;