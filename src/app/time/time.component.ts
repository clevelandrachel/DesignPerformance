/* tslint:disable */

import { Component, OnInit } from '@angular/core';
import { Time } from '../time';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  time: Time[];
  constructor() { }

  ngOnInit() {
  }

}
