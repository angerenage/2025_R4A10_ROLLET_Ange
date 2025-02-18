import { Routes } from '@angular/router';

import { TravelsComponent } from './travels/travels.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: TravelsComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
