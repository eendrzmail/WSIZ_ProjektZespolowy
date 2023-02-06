import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../../../../app/hooks';
import { API_HOST } from '../../../../../shared/common/consts';
import { getAuth, getJWT } from '../../../../../shared/reducers/AuthReducer';
import { AddAnimalWrapper, AnimalForm } from './AnimalAdd.styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './customstyle.css';
import { showSnackbar } from '../../../../../components/Snackbar/Snackbar';
import { useSnackbar } from 'notistack';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

function zfill(num: number, len: number) {return (Array(len).join('0') + num).slice(-len);}

const AnimalAdd = () => {
    const auth = useAppSelector(getAuth);
    const jwt = useAppSelector(getJWT);
    const { enqueueSnackbar } = useSnackbar();

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const schema = object().shape({
        category: string().required(),
        city: string().required(),
        county: string().required(),
        dateOfBirth: string().required(),
        description: string().required(),
        name: string().required(),
    });
    const {
        register, 
        handleSubmit,
        control,
    } = useForm({
        resolver: yupResolver(schema)
    });

    const handleOnSubmit = useCallback(
        (data: FieldValues) => {
            if (!auth) return;

            const dateOfBirth = data.dateOfBirth as Date;

            const prepareData = {
                ...data,
                dateOfBirth: `${dateOfBirth.getFullYear()}-${zfill(dateOfBirth.getMonth()+1, 2)}-${zfill(dateOfBirth.getDate(), 2)}`
            };

            setIsLoading(true);
            console.log(data);

            fetch(`${API_HOST}/users/${auth.id}/animals`, {
                method: 'POST',
                headers: {
                    'Authorization': jwt,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(prepareData)
            })
                .then((response) => {
                    if (response.ok) return response.json();
                    return Promise.reject(response);
                })
                .then(() => navigate('/'))
                .catch(() => showSnackbar(enqueueSnackbar, null, 'Nie udało się dodać', 'error'))
                .finally(() => setIsLoading(false));
        },
        []
    );

    return (
        <AddAnimalWrapper>
            <AnimalForm onSubmit={handleSubmit(handleOnSubmit, () => showSnackbar(enqueueSnackbar, null, 'Uzupełnij wszystkie pola', 'error'))}>
                <TextField id="name" label="Imie" variant="outlined" type="text" {...register('name')}/>

                <TextField 
                    multiline
                    rows={4}
                    maxRows={7}
                    id="desc" 
                    label="Opis" 
                    variant="outlined" 
                    type="text" 
                    {...register('description')}
                />
                
                <TextField id="city" label="Miasto" variant="outlined" type="text" {...register('city')}/>
                
                <TextField id="country" label="Kraj" variant="outlined" type="text" {...register('county')}/>

                <FormControl fullWidth>
                    <InputLabel id="category1">Kategoria</InputLabel>
                    <Select
                        labelId="category1"
                        id="demo-simple-select"
                        label="Age"
                        {...register('category')}
                    >
                        <MenuItem value="DOG">Pies</MenuItem>
                        <MenuItem value="CAT">Kot</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <Controller
                        control={control}
                        name='dateOfBirth'
                        render={({ field }) => (
                            <DatePicker
                                placeholderText='Data urodzenia'
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                                className="date"
                                showYearDropdown
                            />
                        )}
                    />
                </FormControl>

                <Button 
                    variant="outlined"
                    type="submit"
                >
                    Dodaj
                </Button>
            </AnimalForm>
        </AddAnimalWrapper>
    );
};

export default AnimalAdd;
