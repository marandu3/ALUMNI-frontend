import { Routes } from '@angular/router';
import { Landingpage } from './pages/landingpage/landingpage';
import { Ourwork } from './pages/ourwork/ourwork';
import { Contact } from './pages/contact/contact';

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
    }
];
