import { RootState } from './../../../app/store';
import { createSlice } from '@reduxjs/toolkit';
import { IAuthReducer } from './AuthReducer';
import { asyncLogin } from './asyncThunk';

const initialState: IAuthReducer = {
    user: null
};

export const authReducer = createSlice({
    name: 'AuthReducer',
    initialState,
    reducers: {
        login(state) {
            state.user = {
                userName: 'jakiś tam user'
            };
        },

        logout(state) {
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(asyncLogin.fulfilled, (state, action) => {
                console.log(action.payload);
                state.user = action.payload;
            });
    }
});

export const getAuth = (state: RootState): object | null => 
    state.auth.user;

export const { login, logout } = authReducer.actions;
export default authReducer.reducer;