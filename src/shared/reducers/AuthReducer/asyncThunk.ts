import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_HOST } from '../../common/consts';

export const asyncLogin = createAsyncThunk(
    'auth/asyncLogin',
    async (data: {username: string, password: string}): Promise<{
        jwt: string
    }> => 
        fetch(`${API_HOST}/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
);
// {
//     try {
//         return new Promise((res, rej) => {
//             setTimeout(
//                 () => res({userName: 'asd'}),
//                 2000
//             );
//         });
//     }
//     catch (e: any) {
//         return e.response.data; 
//     }
// });