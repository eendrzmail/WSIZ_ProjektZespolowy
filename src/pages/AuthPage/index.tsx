import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../app/hooks';
import { getAuth } from '../../shared/reducers/AuthReducer';
import { AuthContainer, AuthPageWrapper, AuthSwapButton, ButtonContainer } from './AuthPage.styled';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';

interface Props {
    page?: boolean
}

const AuthPage = (props: Props) => {
    const [page, setPage] = useState(props.page ?? 0);
    const navigate = useNavigate();
    const auth = useAppSelector(getAuth);

    useEffect(
        () => {
            if (auth) {
                navigate('/');
            }
        },
        [auth]
    );

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