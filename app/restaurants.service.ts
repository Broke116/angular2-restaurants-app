import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Restaurant } from './model/restaurant'; 

@Injectable()
export class RestaurantsService {
    //private _url = 'http://jsonplaceholder.typicode.com/posts';
    private _url = 'http://localhost:64736/api/Restaurants/57601c6da9fba760e3aeed78';

    constructor(private _http: Http) { }

    getAll() : Observable<Restaurant[]> {
        return this._http.get(this._url)
                   .map(this.extractData)
                   .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}