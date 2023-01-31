import React from 'react';
import { Route, Routes, useParams } from 'react-router';
import { AnimalDashboardWrapper, SubMenu } from './AnimalDashboard.styled';
import ChatIcon from '@mui/icons-material/Chat';
import { NavLink } from 'react-router-dom';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import { ANIMAL_DASHBOARD_ROUTING } from './consts';
import AnimalSearch from './components/AnimalSearch/AnimalSearch';

type Props = {}

const AnimalDashboard = (props: Props) => {
    const {id} = useParams();

    return (
        <AnimalDashboardWrapper>
            <Routes>
                <Route element={<AnimalSearch id={id ?? ''} />} index/>
                <Route element={<AnimalSearch id={id ?? ''} />} path={ANIMAL_DASHBOARD_ROUTING.SEARCH}/>
                <Route element={'matches'} path={ANIMAL_DASHBOARD_ROUTING.MATCHES}/>
            </Routes>

            <SubMenu>
                <NavLink to={ANIMAL_DASHBOARD_ROUTING.SEARCH}>
                    <SavedSearchIcon />
                </NavLink>

                <NavLink to={ANIMAL_DASHBOARD_ROUTING.MATCHES}>
                    <ChatIcon />
                </NavLink>
            </SubMenu>
        </AnimalDashboardWrapper>
    );
};

export default AnimalDashboard;