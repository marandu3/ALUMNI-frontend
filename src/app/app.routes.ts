import { Routes } from '@angular/router';

import { Homepage } from './pages/homepage/homepage';
import { News } from './pages/news/news';
import { Events } from './pages/events/events';
import { Community } from './pages/community/community';
import { Settings } from './pages/settings/settings';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full'
    },
    {
        path:'homepage',
        component: Homepage,
        title: 'Homepage'
    },
    {
        path: 'News',
        component:News,
        title:' News',
    },
    {
        path:'Events',
        component: Events,
        title: 'Events',
    },
    {
        path:'Community',
        component: Community,
        title: 'Community',
    },
    {
        path:'Settings',
        component: Settings,
        title: 'Settings',
    },
    {
        path: 'login',
        component: Login,
        title: 'Login',
    }

];
