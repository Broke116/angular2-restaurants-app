System.register(['@angular/core', './restaurants.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, restaurants_service_1;
    var RestaurantComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restaurants_service_1_1) {
                restaurants_service_1 = restaurants_service_1_1;
            }],
        execute: function() {
            RestaurantComponent = class RestaurantComponent {
                constructor(restaurantService) {
                    this.restaurantService = restaurantService;
                    this.errorMessage = '';
                }
                getAll() {
                    this.restaurantService.getAll("http://localhost:64736/api/Restaurants")
                        .subscribe((data) => { this.restaurants = data; this.totalRest = data.length; });
                }
                ngOnInit() {
                    this.getAll();
                    this.cols = [
                        { field: 'restaurant_id', header: 'Id' },
                        { field: 'Name', header: 'Name' },
                        { field: 'Borough', header: 'Borough' },
                        { field: 'Cuisine', header: 'Cuisine' }
                    ];
                }
            };
            RestaurantComponent = __decorate([
                core_1.Component({
                    selector: 'restaurant',
                    templateUrl: '/src/restaurant.template.html'
                }), 
                __metadata('design:paramtypes', [restaurants_service_1.RestaurantsService])
            ], RestaurantComponent);
            exports_1("RestaurantComponent", RestaurantComponent);
        }
    }
});
//# sourceMappingURL=restaurant.component.js.map