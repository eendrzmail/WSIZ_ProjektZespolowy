import React, { useCallback, useState } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import Loader from '../../../../components/Loader';
import { asyncLogin } from '../../../../shared/reducers/AuthReducer/asyncThunk';

const LoginComponent = () => {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    
    const handleClick = useCallback(
        () => {
            setIsLoading(true);
            
            dispatch(asyncLogin())
                .catch(console.error)
                .finally(() => setIsLoading(false));
        },
        []
    );

    return (
        <div>
            LoginComponent

            {!isLoading
                ? (
                    <button
                        onClick={handleClick}
                    >
                        Zaloguj
                    </button>
                )
                : <Loader />
            }
        </div>
    );
};

export default LoginComponent;