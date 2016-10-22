import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../model/restaurant';
import { RestaurantsService } from '../restaurants/restaurants.service';

@Component({
    selector: 'home',
    templateUrl: '/src/home.template.html'
})
export class HomeComponent implements OnInit {
    restaurants: Restaurant[];
    cols: any[];
    totalRest: number = 0;
    submitted: boolean = false;
    data: string;

    constructor(private restaurantService: RestaurantsService) { }

    getAll(value: string) {
        this.restaurantService.getAll('http://localhost:64736/api/Restaurants?$filter=Borough%20eq%20%27' + value + '%27')
            .subscribe((data) => { 
                this.restaurants = data; this.totalRest = data.length; 
                console.log(this.totalRest);
                console.log(this.restaurants);
            });
    }

    ngOnInit() { 
        this.cols = [
            {field: 'Name', header: 'Name'},
            {field: 'Borough', header: 'Borough'},
            {field: 'Cuisine', header: 'Cuisine'}
        ]; 
    }

    onSubmit(data: any): void { 
        this.submitted = true; 
        this.getAll(data.searchValue);        
    }
}