import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
  providers: []

})
export class AlertsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
