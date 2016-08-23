import { Component } from 'angular2/core';
import { Restaurant } from './model/restaurant.ts'
import { RestaurantsService } from './restaurants.service.ts'
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'restaurant',
  templateUrl: './src/restaurant.template.html',
  providers: [RestaurantsService, HTTP_PROVIDERS]
})

export class RestaurantComponent {

}