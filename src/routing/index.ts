import React from 'react';

import { LoginPage, SignUpPage } from 'pages';

type RouteDefinitionType = {
    name: string;
    path: string;
    component: React.FC<any>,
}

export const ROUTE_DEFINITIONS: { [key: string]: RouteDefinitionType; } = Object.freeze({
    landing: {
        name: 'landing',
        path: '/',
        component: LoginPage,
    },
    login: {
        name: 'login',
        path: '/login',
        component: LoginPage,
    },
    signup: {
        name: 'signup',
        path: '/signup',
        component: SignUpPage,
    },
});

export const ROUTE_LIST: Array<RouteDefinitionType> = Object.values(ROUTE_DEFINITIONS);
