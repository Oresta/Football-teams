import { Team } from './team';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTeam: Team;

  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

}
