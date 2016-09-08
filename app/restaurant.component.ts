import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Restaurant } from './model/restaurant';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'restaurant',
  templateUrl: '/src/restaurant.template.html'
})

export class RestaurantComponent implements OnInit { 
    restaurants: Restaurant[];
    errorMessage: string = '';

    constructor(
        private restaurantService: RestaurantsService) { }

    getAll() {
        this.restaurantService.getAll()
            .subscribe(
                restaurants => this.restaurants = restaurants);
    }

    ngOnInit(): void {
      this.getAll();
    }
 }