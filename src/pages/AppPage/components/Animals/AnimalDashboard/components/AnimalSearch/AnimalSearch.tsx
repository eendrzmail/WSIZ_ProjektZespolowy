import React, { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '../../../../../../../app/hooks';
import Loader from '../../../../../../../components/Loader';
import { API_HOST } from '../../../../../../../shared/common/consts';
import { getAuth, getJWT } from '../../../../../../../shared/reducers/AuthReducer';
import { IAnimal } from '../../../../../../../types/Animal';
import { CardWrapper } from './AnimalSearch.styled';
import AnimalCard from './components/AnimalCard/AnimalCard';

type Props = {
    id: string
}

const AnimalSearch = ({
    id
}: Props) => {
    const auth = useAppSelector(getAuth);
    const jwt = useAppSelector(getJWT);

    const [isFetching, setisFetching] = useState(false);
    const [propositions, setPropositions] = useState<IAnimal[]>([]);
    
    const fetchPropositions = useCallback(
        () => {
            if (!auth) return;
            setisFetching(true);

            fetch(`${API_HOST}/users/${auth.id}/animals/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': jwt,
                    'Content-Type': 'application/json',
                },
            })
                .then(
                    (response) => response.json()
                        .then(setPropositions)
                )
                .finally(() => setisFetching(false));
        },
        []
    );

    useEffect(fetchPropositions, [fetchPropositions]);

    const handleDislike = useCallback(
        (animal: IAnimal) => {
            const prepareData = {
                receiverAnimalId: animal.id
            };

            fetch(`${API_HOST}/animals/${id}/interactions/dislike`, 
                {
                    method: 'POST',
                    headers: {
                        'Authorization': jwt,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(prepareData)
                })
                .then(() => setPropositions(prev => prev.filter(prop => prop.id != animal.id)));
        },
        []
    );

    const handleLike = useCallback(
        (animal: IAnimal) => {
            const prepareData = {
                receiverAnimalId: animal.id
            };

            fetch(`${API_HOST}/animals/${id}/interactions/like`, 
                {
                    method: 'POST',
                    headers: {
                        'Authorization': jwt,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(prepareData)
                })
                .then(() => setPropositions(prev => prev.filter(prop => prop.id != animal.id)));
        },
        []
    );
    
    return (
        <CardWrapper>
            {isFetching && <Loader />}

            {propositions.length 
                ? (
                    <AnimalCard 
                        animal={propositions[0]} 
                        onLike={handleLike}
                        onDislike={handleDislike}
                    />
                )
                : 'Brak zwierząt do wyświetlenia'
            }
        </CardWrapper>
    );
};

export default AnimalSearch;