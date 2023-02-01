import styled from 'styled-components';
import { theme } from '../../../../../../../../shared/styles/theme';

export const MatchesListContainer = styled.div`
    height: 70vh;
    width: 200px;
    display: flex;
    flex-direction: column;
    border-radius: 5px 0 0 5px;
    background-color: ${theme.colors.backgroundColor};
    color: black;
`;