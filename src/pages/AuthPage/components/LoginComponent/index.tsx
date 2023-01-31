import { Button, TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../../app/hooks';
import Loader from '../../../../components/Loader';
import { asyncLogin } from '../../../../shared/reducers/AuthReducer/asyncThunk';
import { LoginWrapper } from './Login.styled';

const LoginComponent = () => {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit} = useForm();
    
    // const handleClick = useCallback(
    //     (data: FieldValues) => {
    //         setIsLoading(true);
            
    //         dispatch(asyncLogin({
    //             username: data.username,
    //             password: data.password
    //         }))
    //             .catch(console.error)
    //             .finally(() => setIsLoading(false));
    //     },
    //     []
    // );

    const handleOnSubmit = useCallback(
        (data: FieldValues) => {
            setIsLoading(true);
            
            dispatch(asyncLogin({
                username: data.username,
                password: data.password
            }))
                .catch(console.error)
                .finally(() => setIsLoading(false));
        },
        []
    );


    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <LoginWrapper>
                <h1>Logowanie</h1>
            
                <TextField id="outlined-basic" label="Login" variant="outlined" type="text" {...register('username')}/>
                <TextField id="outlined-basic" label="Hasło" variant="outlined" type="password" {...register('password')}/>

                {!isLoading
                    ? (
                        <Button 
                            variant="outlined"
                            type="submit"
                        >
                        Zaloguj
                        </Button>
                    )
                    : <Loader />
                }
            </LoginWrapper>
        </form>
    );
};

export default LoginComponent;