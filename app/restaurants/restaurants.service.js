System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var RestaurantsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            RestaurantsService = class RestaurantsService {
                constructor(_http) {
                    this._http = _http;
                    //private _url = 'http://jsonplaceholder.typicode.com/posts';
                    this._url = 'http://localhost:64736/api/Restaurants';
                }
                getAll() {
                    return this._http.get(this._url)
                        .map(this.extractData)
                        .catch(this.handleError);
                }
                extractData(res) {
                    let body = res.json();
                    return body || {};
                }
                handleError(error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                }
            };
            RestaurantsService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], RestaurantsService);
            exports_1("RestaurantsService", RestaurantsService);
        }
    }
});
//# sourceMappingURL=restaurants.service.js.map