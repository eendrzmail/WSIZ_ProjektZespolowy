import styled from 'styled-components';
import { theme } from '../../../../../../../shared/styles/theme';

export const MatchesWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const ChatItem = styled.div`
    width: 100%;
    height: 50px;
    /* border-bottom: 1px solid gray; */
    padding: 5px;
    display:flex;
    align-items: center;
    border-radius: 4px 0 0 4px;

    &.active {
        background-color: ${theme.colors.primaryColor};
    }
    
    &:hover {
        background-color: lightgray;
    }
`;

export const Box = styled.div`
    display: flex;
    box-shadow: 0px 0px 15px #999999;
    border-radius: 4px;
`;