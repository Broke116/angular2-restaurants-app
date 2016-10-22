System.register(['@angular/router', './restaurants/restaurant.component', './home/home.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, restaurant_component_1, home_component_1;
    var appRoutes, appRoutingProviders, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (restaurant_component_1_1) {
                restaurant_component_1 = restaurant_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: 'restaurants', component: restaurant_component_1.RestaurantComponent },
                { path: '', component: home_component_1.HomeComponent }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map