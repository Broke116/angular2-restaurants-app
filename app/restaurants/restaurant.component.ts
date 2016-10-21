import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { DataTable } from 'angular2-datatable/datatable';

import { Restaurant } from './model/restaurant';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'restaurant',
  templateUrl: '/src/restaurant.template.html'
})

export class RestaurantComponent implements OnInit {
    private restaurants;
    errorMessage: string = '';

    constructor(
        private restaurantService: RestaurantsService) { }

    /*getAll() {
        this.restaurantService.getAll()
            .subscribe((data) => { this.restaurants = data; });
    }*/

    ngOnInit(): void {
      //this.getAll();      
    }
 }