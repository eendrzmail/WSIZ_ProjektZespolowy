import React from 'react';

export enum ROUTE {
    TEST = 'test',
    TEST2 = 'test2'
}

interface ROUTING_ITEM {
    path: ROUTE;
    component: JSX.Element
}

export const ROUTING: ROUTING_ITEM[] = [
    {
        path: ROUTE.TEST,
        component: <div>dupa</div>
    },
    {
        path: ROUTE.TEST2,
        component: <div>halohaloo</div>
    }
];