import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    regionNA: ['United States', 'Canada', 'México', 'Puerto Rico']
}

const RegionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {}
})

export const selectNA = state => state.region.regionNA

export default RegionSlice.reducer