import React from 'react';
import { IAnimal } from '../../../../../../../../../types/Animal';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import { ActionIcon, CardWrapper, IconContainer, Name } from './AnimalCard.styled';
import { API_HOST } from '../../../../../../../../../shared/common/consts';
import { useAppSelector } from '../../../../../../../../../app/hooks';
import { getAuth } from '../../../../../../../../../shared/reducers/AuthReducer';

type Props = {
    animal: IAnimal;
    onLike: (animal: IAnimal) => void;
    onDislike: (animal: IAnimal) => void;
}

const AnimalCard = ({
    animal,
    onDislike,
    onLike
}: Props) => {
    const auth = useAppSelector(getAuth);

    return (
        <div>
            <CardWrapper>
                <figure>
                    <img src={`${API_HOST}/users/${auth?.id}/animals/${animal.id}/pictures`} />
                </figure>
                <Name>{animal.name}</Name>
                <span>{animal.age} lat</span>
                <span>{animal.description}</span>
            </CardWrapper>
            
            <IconContainer>
                <ActionIcon onClick={() => onDislike(animal)}>
                    <CloseIcon />
                </ActionIcon>

                <ActionIcon onClick={() => onLike(animal)}>
                    <FavoriteIcon />
                </ActionIcon>
            </IconContainer>
        </div>
    );
};

export default AnimalCard;