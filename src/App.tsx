import reactLogo from './assets/react.svg';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import AuthPage from './pages/AuthPage';
import AppPage from './pages/AppPage';
import React from 'react';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppPage/>} />
                <Route path='/login' element={<AuthPage/>} />
                <Route path='/register' element={<AuthPage/>} />
                <Route path='*' element={<AppPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
