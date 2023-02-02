import { Button } from '@mui/material';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getAuth, logout } from '../../../../shared/reducers/AuthReducer';
import { ROUTE } from '../../utils/const';
import { CustomButton, MainPage, MenuContainer } from './Menu.styled';
import PetsIcon from '@mui/icons-material/Pets';
import LogoutIcon from '@mui/icons-material/Logout';

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
                <PetsIcon />
            </MainPage>

            <span>
                {auth.sub}
            </span>

            <CustomButton 
                variant="outlined"
                onClick={handleLogout}
            >
                <LogoutIcon />
            </CustomButton>
        </>
        
    );
};

export default Menu;