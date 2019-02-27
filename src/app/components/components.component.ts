import { Component } from '@angular/core';
import COMPONENT from './../componentslist.json';
import { COMPONENTLISTSERVICE } from './../componentlist.service';
import 'rxjs';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[class.content-container]': 'true',
    '[class.content-area]': 'true',
  },
  providers: [ COMPONENTLISTSERVICE ]
})
export class ComponentsComponent {
  component = COMPONENT.list;

  getUrl(item) {
    return item.url.split('#')[0];
  }

  getFragment(item) {
    return item.url.split('#')[1];
  }
}


