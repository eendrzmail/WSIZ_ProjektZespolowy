import React from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { getAuth } from '../../../../shared/reducers/AuthReducer';

const Menu = () => {
    const auth = useAppSelector(getAuth);

    if (!auth) return <></>;

    return (
        <div>
            {auth.userName}      Szukaj | Profil | Zwierzęta
        </div>
        
    );
};

export default Menu;