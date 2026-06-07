import { Routes } from '@angular/router';
import { PublicLayout } from './public/_layout/layout';
import { LogIn } from './public/pages/log-in/log-in';
import { PrivateLayout } from './private/_layout/layout';
import { Home } from './private/pages/home/home';
import { Favorites } from './private/pages/favorites/favorites';
import { authGuard } from './shared/guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  {
    path: 'public',
    component: PublicLayout,
    children: [
      { path: 'log-in', component: LogIn },
      { path: '**', redirectTo: 'log-in' },
    ],
  },
  {
    path: 'private',
    component: PrivateLayout,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: Home },
      { path: 'favorites', component: Favorites },
      { path: '**', redirectTo: 'home' },
    ],
  },
  { path: '**', redirectTo: 'home' },
];
