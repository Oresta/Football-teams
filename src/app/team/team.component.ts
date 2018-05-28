import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { TeamService } from './../team.service';
import { Subscription } from 'rxjs/Subscription';

import { Team } from './../team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit, OnDestroy {

  teams: Team[];
  selectedTeam: Team;
  teamSub: Subscription;

  @Output() selectTeam = new EventEmitter<Team>();

  constructor(
    private teamServer: TeamService
  ) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamSub = this.teamServer.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

  onChange(value): void {
    this.selectedTeam = this.teams[+value];
    this.selectTeam.emit(this.selectedTeam);
  }

  ngOnDestroy() {
    this.teamSub.unsubscribe();
  }

}
