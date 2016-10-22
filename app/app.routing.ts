import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurants/restaurant.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'restaurants', component: RestaurantComponent },
  { path: '', component: HomeComponent }
];

export const appRoutingProviders: any[] = [
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);