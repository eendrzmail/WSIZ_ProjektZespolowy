import styled from 'styled-components';
import { theme } from '../../shared/styles/theme';

export const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 60px 1fr;
`;

export const AppContent = styled.main`
    overflow-y: auto;
`;

export const AppNav = styled.nav`
    height: 100%;
    box-shadow: 0px 0px 15px #999999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${theme.colors.primaryColor};
    gap: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    color: black;

    & > :nth-child(2) {
        margin-left: auto;
    }
`;