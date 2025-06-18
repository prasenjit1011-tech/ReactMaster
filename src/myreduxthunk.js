
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/users/';
const token = null
const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null
}


export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
    const random = Math.floor(Math.random() * 10) + 1;
    const response = await axios.get(apiUrl+random, credentials)
    return response.data
})

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    await axios.get(apiUrl);
    return true;
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      loading: false,
      error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false
          state.user = action.payload
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message
        })
        .addCase(logoutUser.fulfilled, (state) => {
          state.user = null
        })
      }
  });

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});

