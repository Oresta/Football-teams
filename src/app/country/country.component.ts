import {
  Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CountryService } from './../country.service';

import { Team } from './../team';
import { Country } from './../country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit, OnChanges, OnDestroy {

  countries: Object;
  currentCountry: Country;
  countrySub: Subscription;

  @Input() team: Team;

  constructor(
    private countryServer: CountryService
  ) { }

  ngOnInit() {
    this.getCountries();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.team && changes.team.currentValue) {
      const country = changes.team.currentValue;
      this.currentCountry = this.countries[country.countryCode];
    }
  }

  getCountries() {
    this.countrySub = this.countryServer.getCountries().subscribe(data =>
      this.countries = data
    );
  }

  ngOnDestroy() {
    this.countrySub.unsubscribe();
  }

}
