import { RootState } from './../../../app/store';
import { createSlice } from '@reduxjs/toolkit';
import { IAuthReducer } from './AuthReducer';
import { asyncLogin } from './asyncThunk';
import { parseJwt } from '../../common/helpers';
import { string } from 'yup/lib/locale';

const initialState: IAuthReducer = {
    user: null,
    jwt: null,
};

export const authReducer = createSlice({
    name: 'AuthReducer',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            localStorage.removeItem('user');
            localStorage.removeItem('jwt');
        },

        syncLS(state) {
            const ls = localStorage.getItem('user');
            const jwt = localStorage.getItem('jwt');

            ls
                ? state.user = JSON.parse(ls) as IAuthReducer['user']
                : null;
            jwt
                ? state.jwt = jwt
                : null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(asyncLogin.fulfilled, (state, action) => {
                const parsedJWT = parseJwt(action.payload.jwt);
                const jwt = `Bearer ${action.payload.jwt}`;

                localStorage.setItem('user', JSON.stringify(parsedJWT));
                localStorage.setItem('jwt', jwt);
                
                state.user = parsedJWT;
                state.jwt = jwt;
            });
    }
});

export const getAuth = (state: RootState): typeof state.auth.user => {
    return state.auth.user;
};

export const getJWT = (state: RootState): string => {
    return state.auth.jwt || '';
};

export const { logout, syncLS } = authReducer.actions;
export default authReducer.reducer;