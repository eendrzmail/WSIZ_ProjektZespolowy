import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../../../../shared/styles/theme';

export const CardWrapper = styled(NavLink)`
    min-height: 352px;
    display:flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: ${theme.colors.secondaryColor};
    color: black;
    width: 250px;
    text-decoration: none;
    padding: 10px;

    figure {
        margin: 0;
        
        img {
            width: 100%;
            border-radius: 4px 4px 0 0;
            border: 10px solid $secondaryColor;
        }
    }
`;