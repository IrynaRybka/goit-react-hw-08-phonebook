import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContactsAsyncThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsAsyncThunk = createAsyncThunk(
  'contacts/addContacts',
  async ({name, number}, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', {name, number});
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactsAsyncThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
