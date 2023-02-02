import React, { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '../../../../../../../../app/hooks';
import Loader from '../../../../../../../../components/Loader';
import { API_HOST } from '../../../../../../../../shared/common/consts';
import { getAuth, getJWT } from '../../../../../../../../shared/reducers/AuthReducer';
import { IMatch } from '../../../../../../../../types/Match';
import { ChatItem } from '../AnimalMatches.styled';
import { MatchesListContainer } from './MatchesChatList.styled';

type Props = {
    animalId: string;
    onSelect: (id: IMatch) => void
}

const MatchesChatList = ({
    animalId,
    onSelect,
}:Props) => {
    const [matches, setMatches] = useState<IMatch[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const auth = useAppSelector(getAuth);
    const jwt = useAppSelector(getJWT);

    const fetchMatches = useCallback(
        () => {
            if (!auth) return;
            setIsLoading(true);

            fetch(`${API_HOST}/users/${auth.id}/animals/${animalId}/matchings`, {
                method: 'GET',
                headers: {
                    'Authorization': jwt,
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json()
                    .then(setMatches)
                )
                .finally(() => setIsLoading(false));
        },
        []
    );

    useEffect(fetchMatches, [fetchMatches]);

    return (
        <MatchesListContainer>
            <>
                {isLoading && (
                    <Loader />
                )}

                {matches.map(x => (
                    <ChatItem 
                        key={x.id}
                        onClick={() => onSelect(x)}
                    >
                        {x.name}
                    </ChatItem>
                ))}

                {!matches.length && (
                    <div>Brak dopasowanych osób</div>
                )}
            </>
        </MatchesListContainer>
    );
};

export default MatchesChatList;