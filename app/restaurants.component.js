System.register(['angular2/core', './restaurants.service', 'angular2/http', './filters/custom.filter', './filters/OrderBy.filter'], function(exports_1, context_1) {
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
    var core_1, restaurants_service_1, http_1, custom_filter_1, OrderBy_filter_1;
    var RestaurantComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restaurants_service_1_1) {
                restaurants_service_1 = restaurants_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (custom_filter_1_1) {
                custom_filter_1 = custom_filter_1_1;
            },
            function (OrderBy_filter_1_1) {
                OrderBy_filter_1 = OrderBy_filter_1_1;
            }],
        execute: function() {
            RestaurantComponent = (function () {
                function RestaurantComponent(_restaurantsService) {
                    this._restaurantsService = _restaurantsService;
                }
                RestaurantComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._restaurantsService.getRestaurants()
                        .subscribe(function (data) {
                        _this.restaurants = data;
                    });
                };
                RestaurantComponent = __decorate([
                    core_1.Component({
                        selector: 'restaurant',
                        templateUrl: './src/restaurant.template.html',
                        providers: [restaurants_service_1.RestaurantsService, http_1.HTTP_PROVIDERS],
                        pipes: [custom_filter_1.CustomPipe, OrderBy_filter_1.OrderBy]
                    }), 
                    __metadata('design:paramtypes', [restaurants_service_1.RestaurantsService])
                ], RestaurantComponent);
                return RestaurantComponent;
            }());
            exports_1("RestaurantComponent", RestaurantComponent);
        }
    }
});
//# sourceMappingURL=restaurants.component.js.map