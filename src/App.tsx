import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import AuthPage from './pages/AuthPage';
import AppPage from './pages/AppPage';
import React from 'react';
import { SnackbarProvider } from 'notistack';

function App() {
    return (
        <SnackbarProvider maxSnack={3}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<AppPage/>} />
                    <Route path='/login' element={<AuthPage/>} />
                    <Route path='/register' element={<AuthPage/>} />
                    <Route path='*' element={<AppPage />} />
                </Routes>
            </BrowserRouter>
        </SnackbarProvider>
    );
}

export default App;
