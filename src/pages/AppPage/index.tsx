import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { useAppSelector } from '../../app/hooks';
import { getAuth } from '../../shared/reducers/AuthReducer';
import { AppContent, AppNav, AppWrapper } from './AppPage.styled';
import Menu from './components/Menu';
import { ROUTING } from './utils/const';

const AppPage = () =>  {
    const auth = useAppSelector(getAuth);
    const navigate = useNavigate();

    useEffect(
        () => {
            console.log('AppPage:: ',auth);
            if (!auth) {
                navigate('/login');
            }
        },
        []
    );

    return (
        <AppWrapper>
            <AppContent>
                <Routes>
                    <Route element={ROUTING[0].component} index/>
    
                    {ROUTING.map(page => (
                        <Route 
                            key={page.path} 
                            path={page.path} 
                            element={page.component} 
                        />
                    ))}
    
                    <Route path={'*'} element={<div>Nie znaleziono strony</div>} />
                </Routes>
            </AppContent>
            
            <AppNav>
                <Menu />
            </AppNav>
        </AppWrapper>
    );
};


export default AppPage;