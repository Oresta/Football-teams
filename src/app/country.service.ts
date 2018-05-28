import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountryService {

  constructor(
    private http: HttpClient
  ) { }

  getCountries(): Observable<Object> {
    return this.http.get('./assets/countries.json').map(data => {
      return data;
    });
  }

}
