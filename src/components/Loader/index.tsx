import React from 'react';
import loaderSVG from '../../assets/svg/loader.svg';

const Loader = () => {
    return (
        <div>
            <img src={loaderSVG} alt="Loader" />
        </div>
    );
};

export default Loader;