import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
   // tslint:disable-next-line:use-host-property-decorator
   host: {'[class.content-container]': 'true',
  },
})
export class HomeComponent {}
