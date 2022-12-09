import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContainer, AuthPageWrapper, AuthSwapButton, ButtonContainer } from './AuthPage.styled';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';

interface Props {
    page?: boolean
}

const AuthPage = (props: Props) => {
    const [page, setPage] = useState(props.page ?? 0);
    const navigate = useNavigate();

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