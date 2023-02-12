import { createSlice } from '@reduxjs/toolkit';
import { getUser, register, logIn, logOut } from './auth.thunk';

const initialState = {
    name: '',
    email: '',
    token: null,
    isLoggedIn: false,
    isLoading: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.name = action.payload.name;
        state.email = action.payload.email;
      })
      .addCase(getUser.rejected, state => {
        state.isLoading = false;
        state.token = null;
        state.name = '';
        state.email = '';
      })
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.isLoggedIn = true;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, state => {
        state.isLoading = false;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.token = action.payload.token;
      })
      .addCase(logIn.rejected, state => {
        state.isLoading = false;
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.name = '';
        state.email = '';
        state.token = '';
      })
      .addCase(logOut.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;