import { Component } from 'angular2/core';
import { RestaurantComponent } from './restaurants.component';

@Component({
  selector: 'my-app',
  templateUrl: './src/index.template.html',
  directives: [RestaurantComponent]
})

export class AppComponent { }