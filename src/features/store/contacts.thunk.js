import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


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
  async newContact => {
    const { data } = await axios.post('/contacts', newContact);
    return data;
  }
);

export const deleteContactsAsyncThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try{
      const {data} = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch(e) {
      return thunkAPI.rejectWithValue(e.message)
    }
   
  }
);
