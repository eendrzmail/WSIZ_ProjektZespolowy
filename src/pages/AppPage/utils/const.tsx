import React from 'react';
import AnimalAdd from '../components/Animals/AnimalAdd/AnimalAdd';
import AnimalDashboard from '../components/Animals/AnimalDashboard/AnimalDashboard';
import AnimalsList from '../components/Animals/List';

export enum ROUTE {
    ANIMALS = 'animals',
    NEW_ANIMAL = 'animals/new',
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
        path: `${ROUTE.NEW_ANIMAL}`,
        component: <AnimalAdd />
    },
    {
        path: `${ROUTE.ANIMALS}/:id/*`,
        component: <AnimalDashboard />
    },
];