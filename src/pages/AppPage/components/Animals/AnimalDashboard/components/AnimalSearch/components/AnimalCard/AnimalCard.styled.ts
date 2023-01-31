import styled from 'styled-components';
import { theme } from '../../../../../../../../../shared/styles/theme';

export const CardWrapper = styled.div`
    min-height: 230px;
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

export const IconContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
`;

export const ActionIcon = styled.div`
    width: 63px;
    height: 63px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primaryColor};
    cursor: pointer;

    svg {
        width: 40px;
        height: 40px;

        path {
            fill: white;
        }
    }
`;