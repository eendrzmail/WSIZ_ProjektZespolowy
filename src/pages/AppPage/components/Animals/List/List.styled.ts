import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../../../shared/styles/theme';

export const AnimalListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 50px;
    height: 100%;
    flex: 1;
`;

export const NewAnimal = styled(NavLink)`
    height: 352px;
    width: 250px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px dashed white;
`;

export const AddButton = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${theme.colors.primaryColor};
    display:flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 70px;
        height: 70px;

        path {
            fill: white;
        }
    }
`;