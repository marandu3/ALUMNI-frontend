import { Routes } from '@angular/router';
import { Landingpage } from './pages/landingpage/landingpage';
import { Ourwork } from './pages/ourwork/ourwork';
import { Contact } from './pages/contact/contact';

import { Registeruser } from './components/registeruser/registeruser';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [
    {
        path:'',
        component: Landingpage
    },
    {
        path: 'ourwork',
        component: Ourwork,

    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'register',
        component: Registeruser
    },
    {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [authGuard] // Ensure this route is protected by the auth guard
    }
];
