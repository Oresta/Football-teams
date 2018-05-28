import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

import { Team } from './team';

@Injectable()
export class TeamService {

  constructor(
    private http: HttpClient
  ) { }

  getTeams(): Observable<Team[]> {
    return this.http.get('./assets/footballClubs.json').map(data => {
      return data as Team[];
    });
  }

}
