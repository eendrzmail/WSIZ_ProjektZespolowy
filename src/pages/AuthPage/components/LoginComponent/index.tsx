import React, { useCallback } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { asyncLogin } from '../../../../shared/reducers/AuthReducer/asyncThunk';

const LoginComponent = () => {
    const dispatch = useAppDispatch();
    
    const handleClick = useCallback(
        () => {
            dispatch(asyncLogin())
                .finally(() => console.log('asdad'));

        },
        []
    );

    return (
        <div>
            LoginComponent

            <button
                onClick={handleClick}
            >
                Zaloguj
            </button>
        </div>
    );
};

export default LoginComponent;