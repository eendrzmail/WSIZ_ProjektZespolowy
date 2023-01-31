import { Button } from '@mui/material';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getAuth, logout } from '../../../../shared/reducers/AuthReducer';
import { ROUTE } from '../../utils/const';
import { MenuContainer } from './Menu.styled';

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
            {auth.sub}

            <NavLink to={ROUTE.ANIMALS}>
                Zwierzęta
            </NavLink>

            <NavLink to={ROUTE.TEST2}>
                Strona 2
            </NavLink>

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