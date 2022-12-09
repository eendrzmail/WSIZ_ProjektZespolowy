import React, { useState } from 'react';
import { AuthContainer, AuthPageWrapper, AuthSwapButton, ButtonContainer } from './AuthPage.styled';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';

const AuthPage = () => {
    const [page, setPage] = useState(0);

    return (
        <AuthPageWrapper>
            <AuthContainer>
                <ButtonContainer>
                    <AuthSwapButton onClick={() => setPage(0)}>
                        Logowanie
                    </AuthSwapButton>

                    <AuthSwapButton onClick={() => setPage(1)}>
                        Rejestracja
                    </AuthSwapButton>
                </ButtonContainer>

                {page == 0
                    ? <LoginComponent />
                    : <RegisterComponent />
                }
            </AuthContainer>
        </AuthPageWrapper>
    );
};

export default AuthPage;