import { Button } from '@mui/material';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getAuth, logout } from '../../../../shared/reducers/AuthReducer';

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
            {auth.userName}      Szukaj | Profil | Zwierzęta
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