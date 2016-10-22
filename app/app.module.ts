import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser'
import { HttpModule }    from '@angular/http';

import { routing,
         appRoutingProviders }  from './app.routing';

import { AppComponent } from './app.component';

import { CustomPipe } from './filters/custom.filter';
import { RestaurantComponent } from './restaurants/restaurant.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsService } from './restaurants/restaurants.service';

import { ButtonModule,DataTableModule,SharedModule } from 'primeng/primeng';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    routing,
    DataTableModule,
    ButtonModule    
  ],
  declarations: [ 
      AppComponent,
      RestaurantComponent,
      HomeComponent,
      CustomPipe
  ],
  providers: [
    appRoutingProviders,
    RestaurantsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }