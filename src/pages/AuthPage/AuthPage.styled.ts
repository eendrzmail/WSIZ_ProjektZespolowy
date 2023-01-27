import { theme } from '../../shared/styles/theme';
import styled from 'styled-components';

export const AuthPageWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonContainer = styled.div`
    display:flex
`;

export const AuthContainer = styled.div`
    width: clamp(320px, 500px, 500px);
    min-height: 500px;
    background-color: ${theme.colors.mainColor};
    border-radius: ${theme.borderRadius};
    padding-bottom: 10px;
`;

export const AuthSwapButton = styled.button`
    width: 50%;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;