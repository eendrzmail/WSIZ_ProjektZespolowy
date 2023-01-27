import { Button, TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../../app/hooks';
import Loader from '../../../../components/Loader';
import { asyncLogin } from '../../../../shared/reducers/AuthReducer/asyncThunk';
import { LoginWrapper } from './Login.styled';

const LoginComponent = () => {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit} = useForm();
    
    const handleClick = useCallback(
        () => {
            setIsLoading(true);
            
            dispatch(asyncLogin())
                .catch(console.error)
                .finally(() => setIsLoading(false));
        },
        []
    );

    return (
        <LoginWrapper>
            <h1>Logowanie</h1>
            
            <TextField id="outlined-basic" label="Login" variant="outlined" type="text" {...register('login')}/>
            <TextField id="outlined-basic" label="Hasło" variant="outlined" type="password" {...register('password')}/>

            {!isLoading
                ? (
                    <Button 
                        variant="outlined"
                        onClick={handleClick}
                    >
                        Zaloguj
                    </Button>
                )
                : <Loader />
            }
        </LoginWrapper>
    );
};

export default LoginComponent;