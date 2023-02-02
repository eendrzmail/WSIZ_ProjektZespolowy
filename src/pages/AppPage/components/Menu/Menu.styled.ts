import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../../shared/styles/theme';

export const MenuContainer = styled.div`
    display: flex;
    gap: 20px;
    background-color: ${theme.colors.primaryColor};
`;

export const MainPage = styled(NavLink)`
    font-size: 2rem;
    color: black;
    text-decoration: none;

    svg {
        fill: white;
        height: 45px;
        width: 45px;
    }
`;

export const CustomButton = styled(Button)`
    color: white;
    border-color: white;

    svg {
        fill: white;
    }
`;