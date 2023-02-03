import { Route } from '@angular/router';
import { DashboardComponent } from './pages/home/pages/dashboard/dashboard.component';
import { HomeModule } from './pages/home/home.module';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        (lib) => lib.HomeModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@kredete-frontends/shared-ang').then(
        (lib) => lib.SharedAngModule
      ),
  },
  // {path:"", redirectTo:"login", pathMatch:"full"},
];
