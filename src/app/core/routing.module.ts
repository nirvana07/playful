import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';

const routes: Routes = [
    { path: '',  redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'registration',
        component: DashboardComponent,
        children: [{
           path: '', component: RegistrationComponent
        }]
    },
    { path: 'oops', component: NotFoundComponent },
    { path: '**', redirectTo: 'oops', pathMatch: 'full' }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
