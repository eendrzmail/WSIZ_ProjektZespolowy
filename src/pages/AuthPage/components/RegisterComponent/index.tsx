import { Button, TextField } from '@mui/material';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { LoginWrapper } from '../LoginComponent/Login.styled';

const RegisterComponent = () => {
    const {register, handleSubmit} = useForm();

    const handleOnSubmit = useCallback(
        console.log,
        []
    );

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <LoginWrapper>
                <h1>Rejestracja</h1>
            
                <TextField id="outlined-basic" label="Imię" variant="outlined" type="text" {...register('name')}/>
                <TextField id="outlined-basic" label="Email" variant="outlined" type="text" {...register('email')}/>
                <TextField id="outlined-basic" label="Login" variant="outlined" type="text" {...register('login')}/>
                <TextField id="outlined-basic" label="Hasło" variant="outlined" type="password" {...register('password')}/>

                <Button 
                    variant="outlined"
                    type='submit'
                >
                        Zarejstruj
                </Button>

            </LoginWrapper>
        </form>
    );
};

export default RegisterComponent;