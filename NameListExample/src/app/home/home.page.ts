import { Component } from '@angular/core';
import { DbService } from '../db.service';
import { Observable } from 'rxjs';
import { Person } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  peopleData : Observable<Person[]>;
  
  constructor(private dbService : DbService) {
    this.dbService.loadCollection("ExampleTimetable");
    this.peopleData = this.dbService.getUsersData();
  }

}
