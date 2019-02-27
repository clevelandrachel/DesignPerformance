/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { COMPONENTLISTSERVICE } from './componentlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '[class.content-container]': 'true',
    '[class.content-area]': 'true',
  },
  providers: [COMPONENTLISTSERVICE]
})
export class AppComponent {
  constructor(private _electronService: ElectronService) {}
  launchWindow() {
    this._electronService.shell.openExternal('https://coursetro.com');
  }
}
