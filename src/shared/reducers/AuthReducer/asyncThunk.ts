import { createAsyncThunk } from '@reduxjs/toolkit';

export const asyncLogin = createAsyncThunk(
    'auth/asyncLogin',
    async (_): Promise<{
        userName: string
    }> => {
        try {
            return new Promise((res, rej) => {
                setTimeout(
                    () => res({userName: 'asd'}),
                    2000
                );
            });
        }
        catch (e: any) {
            return e.response.data; 
        }
    });