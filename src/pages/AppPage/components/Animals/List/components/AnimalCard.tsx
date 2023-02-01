import React from 'react';
import { IAnimal } from '../../../../../../types/Animal';
import { ROUTE } from '../../../../utils/const';
import { CardWrapper } from './AnimalCard.styled';

type Props = {
    animal: IAnimal
}

const AnimalCard = ({
    animal
}: Props) => {
    return (
        <CardWrapper
            to={`/${ROUTE.ANIMALS}/${animal.id}`}
        >
            <figure>
                <img src="https://i1.sndcdn.com/avatars-OfkZjEg3azbQCW4h-nNLRlQ-t500x500.jpg" />
            </figure>
            <span>{animal.name}</span>
            <span>{animal.age}</span>
            <span>{animal.category}</span>
            <span>{animal.description}</span>
        </CardWrapper>
    );
};

export default AnimalCard;