import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser'
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component'
import { RestaurantComponent } from './restaurant.component'
import { RestaurantsService } from './restaurants.service';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule
  ],
  declarations: [ 
      AppComponent,
      RestaurantComponent
  ],
  providers: [
    RestaurantsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }