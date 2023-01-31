import { Button } from '@mui/material';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getAuth, logout } from '../../../../shared/reducers/AuthReducer';
import { ROUTE } from '../../utils/const';

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
        <div>
            {auth.sub}

            <NavLink to={ROUTE.TEST}>
                Strona 1
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
        </div>
        
    );
};

export default Menu;