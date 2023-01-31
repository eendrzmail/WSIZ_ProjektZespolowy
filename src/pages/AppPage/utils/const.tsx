import React from 'react';
import AnimalDashboard from '../components/Animals/AnimalDashboard/AnimalDashboard';
import AnimalsList from '../components/Animals/List';

export enum ROUTE {
    ANIMALS = 'animals',
    TEST2 = 'test2'
}

interface ROUTING_ITEM {
    path: ROUTE | string;
    component: JSX.Element
}

export const ROUTING: ROUTING_ITEM[] = [
    {
        path: ROUTE.ANIMALS,
        component: <AnimalsList />
    },
    {
        path: `${ROUTE.ANIMALS}/:id/*`,
        component: <AnimalDashboard />
    },
    {
        path: ROUTE.TEST2,
        component: <div>halohaloo</div>
    }
];