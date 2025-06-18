import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import axios from 'axios';

const token         = Cookies.get('token') ?? null;
const userRaw       = localStorage.getItem('user');
const user          = userRaw ? JSON.parse(userRaw) : null;
const initialState  = {user, token, loading: false, error: null }
const apiUrl        = 'https://jsonplaceholder.typicode.com/users/';


export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
    const random = Math.floor(Math.random() * 10) + 1;
    const response = await axios.get(apiUrl+random, credentials)

    Cookies.set('token', response.data.id);
    localStorage.setItem('user',  JSON.stringify(response.data));

    return response.data
})

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    await axios.get(apiUrl);

    Cookies.remove('token');
    localStorage.removeItem('user');
    return true;
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false
          state.user    = action.payload
          state.token   = action.payload.id
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

