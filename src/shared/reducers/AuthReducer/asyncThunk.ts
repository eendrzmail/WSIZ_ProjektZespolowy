import { createAsyncThunk } from '@reduxjs/toolkit';

export const asyncLogin = createAsyncThunk(
    'auth/asyncLogin',
    async (_): Promise<{
        userName: string
    }> => 
        new Promise((res, rej) => {
            setTimeout(
                () => res({userName: 'Grzechuuu'}),
                2000
            );
        })
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