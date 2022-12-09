import styled from 'styled-components';

export const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 60px;
`;

export const AppContent = styled.main`
    overflow-y: auto;
`;

export const AppNav = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;