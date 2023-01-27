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
            localStorage.removeItem('user');
        },

        syncLS(state) {
            const ls = localStorage.getItem('user');
            console.log(ls);

            ls
                ? state.user = JSON.parse(ls) as IAuthReducer['user']
                : null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(asyncLogin.fulfilled, (state, action) => {
                localStorage.setItem('user', JSON.stringify(action.payload));
                state.user = action.payload;
            });
    }
});

export const getAuth = (state: RootState): typeof state.auth.user | null => {
    return state.auth.user;
};

export const { login, logout, syncLS } = authReducer.actions;
export default authReducer.reducer;