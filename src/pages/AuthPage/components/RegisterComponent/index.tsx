import { Button, TextField } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useCallback, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../../../app/hooks';
import Loader from '../../../../components/Loader';
import { showSnackbar } from '../../../../components/Snackbar/Snackbar';
import { API_HOST } from '../../../../shared/common/consts';
import { LoginWrapper } from '../LoginComponent/Login.styled';
import { FormWrapper, RegisterWrapper } from './Register.styled';

const RegisterComponent = () => {
    const {register, handleSubmit} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleOnSubmit = useCallback(
        (data: FieldValues) => {
            setIsLoading(true);
            console.log(data);

            fetch(`${API_HOST}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then((response) => {
                    if (response.ok) return response.json();
                    return Promise.reject(response);
                })
                .then(() => {
                    navigate('/');
                    showSnackbar(enqueueSnackbar, null, 'Sukces', 'success');
                })
                .catch(() => showSnackbar(enqueueSnackbar, null, 'Nie udało się zarejestrować', 'error'))
                .finally(() => setIsLoading(false));
        },
        []
    );

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            {isLoading
                ?  <Loader />
                : (
                    <RegisterWrapper>
                        <h1>Rejestracja</h1>

                        <FormWrapper>
                            <TextField id="outlined-basic" label="Nazwa" variant="outlined" type="text" {...register('username')}/>
                            <TextField id="outlined-basic" label="Hasło" variant="outlined" type="password" {...register('password')}/>
                            <TextField id="outlined-basic" label="Email" variant="outlined" type="text" {...register('email')}/>
                            <TextField id="outlined-basic" label="Imię" variant="outlined" type="text" {...register('firstName')}/>
                            <TextField id="outlined-basic" label="Nazwisko" variant="outlined" type="text" {...register('lastName')}/>
                            <TextField id="outlined-basic" label="Miasto" variant="outlined" type="text" {...register('city')}/>
                            <TextField id="outlined-basic" label="Kraj" variant="outlined" type="text" {...register('country')}/>
                            <TextField id="outlined-basic" label="Województwo" variant="outlined" type="text" {...register('voivodeship')}/>
                        </FormWrapper>

                        <Button 
                            variant="outlined"
                            type='submit'
                        >
                        Zarejstruj
                        </Button>

                    </RegisterWrapper>
                )
            }
        </form>
    );
};

export default RegisterComponent;