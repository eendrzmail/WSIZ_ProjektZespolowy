import React from 'react';
import { Route, Routes } from 'react-router';
import { AppContent, AppNav, AppWrapper } from './AppPage.styled';
import { ROUTING } from './utils/const';

const AppPage = () =>  (
    <AppWrapper>
        <AppContent>
            <Routes>
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
              Szukaj | Profil | Zwierzęta
        </AppNav>
    </AppWrapper>
);


export default AppPage;