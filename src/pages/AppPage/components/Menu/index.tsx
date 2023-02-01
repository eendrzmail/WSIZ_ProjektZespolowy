import { Button } from '@mui/material';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getAuth, logout } from '../../../../shared/reducers/AuthReducer';
import { ROUTE } from '../../utils/const';
import { MainPage, MenuContainer } from './Menu.styled';

const Menu = () => {
    const auth = useAppSelector(getAuth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = useCallback(
        () => {
            dispatch(logout());
            navigate('/login');
        },
        []
    );

    if (!auth) return <></>;

    return (
        <>

            <MainPage to={ROUTE.ANIMALS}>
                Główna
            </MainPage>

            <span>
                {auth.sub}
            </span>

            <Button 
                variant="outlined"
                onClick={handleLogout}
            >
                Wyloguj
            </Button>
        </>
        
    );
};

export default Menu;