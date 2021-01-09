import { Component, OnInit } from '@angular/core';
import { Person } from '../types';
import { Observable } from 'rxjs';
import { Input, Output } from '@angular/core';


@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.scss'],
})
export class NameListComponent implements OnInit {

  @Input() personData: Observable<Person[]>; // all persons
  @Output() personOutput: Observable<Person[]>; // selected persons in list

  constructor() {}

  ngOnInit() {}

}
