import { useSnackbar } from 'notistack';
import React, { useCallback, useEffect } from 'react';
import { useAppSelector } from '../../../../../../app/hooks';
import { showSnackbar } from '../../../../../../components/Snackbar/Snackbar';
import { API_HOST } from '../../../../../../shared/common/consts';
import { getAuth, getJWT } from '../../../../../../shared/reducers/AuthReducer';
import { IAnimal } from '../../../../../../types/Animal';
import { ROUTE } from '../../../../utils/const';
import { CardWrapper, Name, RemoveIcon } from './AnimalCard.styled';

type Props = {
    animal: IAnimal;
    onDelete: () => void
}

const AnimalCard = ({
    animal,
    onDelete
}: Props) => {
    const auth = useAppSelector(getAuth);
    const jwt = useAppSelector(getJWT);
    const { enqueueSnackbar } = useSnackbar();

    const handleOnClick =  useCallback(
        () => {
            if (!auth?.id) return;

            fetch(`${API_HOST}/users/${auth.id}/animals/${animal.id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': jwt,
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    if (response.ok) return response.json();
                    return Promise.reject(response);
                })
                .then(() => {
                    showSnackbar(enqueueSnackbar, null, 'Usunięto', 'success');
                    onDelete();
                })
                .catch(() => showSnackbar(enqueueSnackbar, null, 'Nie udało się usunąć', 'error'));
        },
        []
    );

    return (
        <div style={{position: 'relative'}}>
            <RemoveIcon onClick={(e) => {
                e.stopPropagation();
                handleOnClick();
            }}/>

            <CardWrapper
                to={`/${ROUTE.ANIMALS}/${animal.id}`}
            >
                <figure>
                    {/* /users/{userId}/animals/{animalId}/pictures */}
                    <img src={`${API_HOST}/users/${auth?.id}/animals/${animal.id}/pictures`} />
                </figure>
                <Name>{animal.name}</Name>
                <span>{animal.age} lat</span>
                {/* <span>{animal.category}</span> */}
                <span>{animal.description}</span>
            </CardWrapper>
        </div>
    );
};

export default AnimalCard;