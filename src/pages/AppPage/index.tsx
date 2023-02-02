import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import AuthReducer, { getAuth, syncLS } from '../../shared/reducers/AuthReducer';
import { AppContent, AppNav, AppWrapper } from './AppPage.styled';
import Menu from './components/Menu';
import { ROUTING } from './utils/const';

const AppPage = () =>  {
    const auth = useAppSelector(getAuth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    

    useEffect(
        () => {
            dispatch(syncLS());
            
            // console.log('AppPage:: ',auth);
            if (!auth) {
                navigate('/login');
            }
        },
        []
    );

    return (
        <AppWrapper>
            <AppNav>
                <Menu />
            </AppNav>
            
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
        </AppWrapper>
    );
};


export default AppPage;