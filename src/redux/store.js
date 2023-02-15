import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './tasksSlice'
import eventReducer from './eventsSlice'

export default configureStore({
    reducer: {
        tasks: taskReducer,
        events: eventReducer,
    }
});

