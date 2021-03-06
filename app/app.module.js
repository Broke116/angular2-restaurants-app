System.register(['./rxjs-extensions', '@angular/core', '@angular/platform-browser', '@angular/http', '@angular/forms', './app.routing', './app.component', './filters/custom.filter', './restaurants/restaurant.component', './home/home.component', './restaurants/restaurants.service', 'primeng/primeng'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, http_1, forms_1, app_routing_1, app_component_1, custom_filter_1, restaurant_component_1, home_component_1, restaurants_service_1, primeng_1;
    var AppModule;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (custom_filter_1_1) {
                custom_filter_1 = custom_filter_1_1;
            },
            function (restaurant_component_1_1) {
                restaurant_component_1 = restaurant_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (restaurants_service_1_1) {
                restaurants_service_1 = restaurants_service_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            }],
        execute: function() {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        http_1.HttpModule,
                        app_routing_1.routing,
                        primeng_1.DataTableModule,
                        primeng_1.ButtonModule,
                        forms_1.FormsModule
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        home_component_1.HomeComponent,
                        restaurant_component_1.RestaurantComponent,
                        custom_filter_1.CustomPipe
                    ],
                    providers: [
                        app_routing_1.appRoutingProviders,
                        restaurants_service_1.RestaurantsService
                    ],
                    bootstrap: [app_component_1.AppComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map