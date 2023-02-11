import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://63dfb22159bccf35dab7bfe2.mockapi.io/contacts/';

export const getContactsAsyncThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(baseURL);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsAsyncThunk = createAsyncThunk(
  'contacts/addContacts',
  async newContact => {
    const { data } = await axios.post(baseURL, newContact);
    return data;
  }
);

export const deleteContactsAsyncThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try{
      const {data} = await axios.delete(`${baseURL}/${id}`);
      return data.id;
    } catch(e) {
      return thunkAPI.rejectWithValue(e.message)
    }
   
  }
);
