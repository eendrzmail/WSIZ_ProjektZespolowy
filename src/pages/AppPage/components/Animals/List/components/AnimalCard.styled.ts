import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../../../../shared/styles/theme';
import DeleteIcon from '@mui/icons-material/Delete';

export const CardWrapper = styled(NavLink)`
    min-height: 352px;
    display:flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: ${theme.colors.secondaryColor};
    box-shadow: 0px 0px 15px #999999;

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
            width: 230px;
            height: 230px;
        }
    }
`;

export const Name = styled.span`
    font-size: 1.3rem;
    width: 100%;
    text-align: center;
`;

export const RemoveIcon = styled(DeleteIcon)`
    right: 15px;
    top: 15px;
    position: absolute;
    cursor: pointer;

    path {
        fill: gray;
    }

    &:hover {
        path {
            fill: red;
        }
    }
`;