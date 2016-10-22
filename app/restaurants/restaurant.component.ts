import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Restaurant } from '../model/restaurant';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'restaurant',
  templateUrl: '/src/restaurant.template.html'
})

export class RestaurantComponent implements OnInit {
    restaurants: Restaurant[];
    cols: any[];
    totalRest: number;
    errorMessage: string = '';

    constructor(
        private restaurantService: RestaurantsService) { }

    getAll() {
        this.restaurantService.getAll("http://localhost:64736/api/Restaurants")
            .subscribe((data) => { this.restaurants = data; this.totalRest = data.length; });
    }

    ngOnInit(): void {
      this.getAll();

      this.cols = [
            {field: 'restaurant_id', header: 'Id'},
            {field: 'Name', header: 'Name'},
            {field: 'Borough', header: 'Borough'},
            {field: 'Cuisine', header: 'Cuisine'}
        ];      
    }
 }