import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurants/restaurant.component';

const appRoutes: Routes = [
  { path: 'restaurants', component: RestaurantComponent },
  //{ path: '', component: AppComponent }
];

export const appRoutingProviders: any[] = [
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);