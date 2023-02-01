import React, { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '../../../../../app/hooks';
import Loader from '../../../../../components/Loader';
import { API_HOST } from '../../../../../shared/common/consts';
import { getAuth, getJWT } from '../../../../../shared/reducers/AuthReducer';
import { IAnimal } from '../../../../../types/Animal';
import AnimalCard from './components/AnimalCard';
import { AddButton, AnimalListWrapper, NewAnimal } from './List.styled';
import AddIcon from '@mui/icons-material/Add';


const AnimalsList = () => {
    const auth = useAppSelector(getAuth);
    const jwt = useAppSelector(getJWT);

    const [isFetching, setisFetching] = useState(false);
    const [animals, setAnimals] = useState<IAnimal[]>([]);
    
    const fetchAnimals = useCallback(
        () => {
            if (!auth) return;
            setisFetching(true);

            fetch(`${API_HOST}/user/${auth.id}/animal`, {
                method: 'GET',
                headers: {
                    'Authorization': jwt,
                    'Content-Type': 'application/json',
                },
            })
                .then(
                    (response) => response.json()
                        .then(setAnimals)
                )
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
                        <NewAnimal to={''}>
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