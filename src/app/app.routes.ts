import { Routes } from '@angular/router';
import { Landingpage } from './pages/landingpage/landingpage';
import { Ourwork } from './pages/ourwork/ourwork';
import { Contact } from './pages/contact/contact';

import { Registeruser } from './components/registeruser/registeruser';

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
    }
];
