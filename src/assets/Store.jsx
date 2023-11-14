import { configureStore } from '@reduxjs/toolkit';
import regionReducer from './RegionSlice'

export const Store = configureStore({
    reducer: {
        region: regionReducer,
    }
})