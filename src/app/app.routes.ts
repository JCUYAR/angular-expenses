import { Routes } from '@angular/router';
import { Registries } from './components/registries/registries';
import { Categories } from './components/categories/categories';
import { Graphics } from './components/graphics/graphics';
import { Login } from './components/login/login';
import { CreateAccount } from './components/create-account/create-account';

export const routes: Routes = [
    {
        path: 'registries',
        component: Registries
    },
    {
        path: 'categories',
        component: Categories
    },
    {
        path: 'graphics',
        component: Graphics
    },
{
  path: 'login',
  loadComponent: () => import('./components/login/login').then(m => m.Login)
},
    {
        path: 'create-account',
        component: CreateAccount
    },
    {
        path: '**',
        redirectTo: 'registries'
    }

];
