import React, { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '../../../../../app/hooks';
import Loader from '../../../../../components/Loader';
import { API_HOST } from '../../../../../shared/common/consts';
import { getAuth, getJWT } from '../../../../../shared/reducers/AuthReducer';
import { IAnimal } from '../../../../../types/Animal';
import AnimalCard from './components/AnimalCard';
import { AddButton, AnimalListWrapper, NewAnimal } from './List.styled';
import AddIcon from '@mui/icons-material/Add';
import { ROUTE, ROUTING } from '../../../utils/const';
import { showSnackbar } from '../../../../../components/Snackbar/Snackbar';
import { useSnackbar } from 'notistack';


const AnimalsList = () => {
    const auth = useAppSelector(getAuth);
    const jwt = useAppSelector(getJWT);
    const { enqueueSnackbar } = useSnackbar();


    const [isFetching, setisFetching] = useState(false);
    const [animals, setAnimals] = useState<IAnimal[]>([]);
    
    const fetchAnimals = useCallback(
        () => {
            if (!auth) return;
            setisFetching(true);

            fetch(`${API_HOST}/users/${auth.id}/animals`, {
                method: 'GET',
                headers: {
                    'Authorization': jwt,
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    if (response.ok) return response.json();
                    return Promise.reject(response);
                })
                .then(setAnimals)
                .catch(() => showSnackbar(enqueueSnackbar, null, 'Nie udało się pobrać zwierząt', 'error'))
                .finally(() => setisFetching(false));
        },
        []
    );

    useEffect(fetchAnimals, [fetchAnimals]);

    return (
        <AnimalListWrapper>
            {isFetching 
                ? <Loader />
                : (
                    <>
                        <NewAnimal to={`/${ROUTE.NEW_ANIMAL}`}>
                            <AddButton>
                                <AddIcon />
                            </AddButton>
                        </NewAnimal>

                        {animals.map(animal => (
                            <AnimalCard key={animal.id} animal={animal} />
                        ))}
                    </>
                )
            }

        </AnimalListWrapper>
    );
};

export default AnimalsList;
