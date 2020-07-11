import { Component, OnInit } from '@angular/core';

import { UvHttpServiceService } from './uv-http-service.service';
import { Person } from './person';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular HTTP';
  people: any = [];
  gotObservable;
  cricketerPromise;

  constructor(private uvHttpServiceService: UvHttpServiceService) {
  }

  ngOnInit(): void {
    this.gotObservable = this.uvHttpServiceService.getGOTCharacters();
    this.cricketerPromise = this.uvHttpServiceService.getCricketers();
  }

  loadGOTData(): void {
    this.gotObservable.subscribe((gotCharacters: any) => {
      this.people = gotCharacters.data;
    });
  }
  loadCricketData(): void {
    this.cricketerPromise.then((crickerters: any) => {
      this.people = crickerters.data;
    });
  }
}
