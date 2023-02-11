import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter: ""
}

const filterSlise = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterContact: (state, action) => {
          state.filter = action.payload;
        }
    }
})

export const { setFilterContact} = filterSlise.actions;
export default filterSlise.reducer;