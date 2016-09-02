import { Component, OnInit } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from './model/restaurant'
import { RestaurantsService } from './restaurants.service'
import {HTTP_PROVIDERS} from 'angular2/http';
import { CustomPipe } from './filters/custom.filter';
import { OrderBy } from './filters/OrderBy.filter';

@Component({
  selector: 'restaurant',
  templateUrl: './src/restaurant.template.html',
  providers: [RestaurantsService, HTTP_PROVIDERS],
  pipes: [CustomPipe, OrderBy]
})

export class RestaurantComponent implements OnInit { 
  restaurants: Restaurant[];

  constructor(private _restaurantsService : RestaurantsService) { }

  ngOnInit() {
    this._restaurantsService.getRestaurants()
        .subscribe(data => {
          this.restaurants = data;
        });
  }
}