/* tslint:disable */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { ComponentDemosComponent } from './component-demos/component-demos.component';
import { AlertsComponent } from './component-demos/alerts/alerts.component';
import { ProgressBarsComponent } from './component-demos/progress-bars/progress-bars.component';
import { SpinnersComponent } from './component-demos/spinners/spinners.component';
import { DownloadComponent } from './component-demos/download/download.component';
import { FormsComponent } from './component-demos/forms/forms.component';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { COMPONENTLISTSERVICE } from './../componentlist.service';

@NgModule({
  declarations: [ComponentsComponent, AlertsComponent, ProgressBarsComponent, SpinnersComponent, DownloadComponent, FormsComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ClarityModule,
    ComponentsRoutingModule
  ],
providers: [COMPONENTLISTSERVICE]
}
)
export class ComponentsModule { }
