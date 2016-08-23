import { Http } from 'angular2/http'
import { Injectable } from 'angular2/core'

import { Observable } from 'rxjs/Observable';
import { Restaurant } from './model/restaurant'; 

@Injectable()
export class RestaurantsService {
    private _url = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private _http: Http) { }

    getRestaurants() : Observable<Restaurant[]> {
        return this._http.get(this._url)
                   .map(res => res.json());
    }
}