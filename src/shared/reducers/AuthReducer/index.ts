import { RootState } from './../../../app/store';
import { createSlice } from '@reduxjs/toolkit';
import { IAuthReducer } from './AuthReducer';
import { asyncLogin } from './asyncThunk';
import { parseJwt } from '../../common/helpers';

const initialState: IAuthReducer = {
    user: null
};

export const authReducer = createSlice({
    name: 'AuthReducer',
    initialState,
    reducers: {
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
                console.log(action.payload.jwt);
                const parsedJWT = parseJwt(action.payload.jwt);
                localStorage.setItem('user', JSON.stringify(parsedJWT));
                state.user = parsedJWT;
            });
    }
});

export const getAuth = (state: RootState): typeof state.auth.user | null => {
    return state.auth.user;
};

export const { logout, syncLS } = authReducer.actions;
export default authReducer.reducer;