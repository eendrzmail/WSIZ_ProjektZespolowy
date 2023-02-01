import React from 'react';
import { IAnimal } from '../../../../../../../../../types/Animal';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import { ActionIcon, CardWrapper, IconContainer, Name } from './AnimalCard.styled';

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
    return (
        <div>
            <CardWrapper>
                <figure>
                    <img src="https://i1.sndcdn.com/avatars-OfkZjEg3azbQCW4h-nNLRlQ-t500x500.jpg" />
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