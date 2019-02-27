/* tslint:disable */
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeComponent } from './time/time.component';
import { SequencesComponent } from './sequences/sequences.component';
import { ResourcesComponent } from './resources/resources.component';
import { ComponentsComponent } from './components/components.component';
import { NgxElectronModule } from 'ngx-electron';
import { HomeComponent } from './home/home.component';
import { COMPONENTLISTSERVICE } from './componentlist.service';
import { NavLinksComponent } from './nav-links.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    SequencesComponent,
    ResourcesComponent,
    ComponentsComponent,
    HomeComponent,
    NavLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClarityModule,
    NgxElectronModule,
    BrowserAnimationsModule
  ],
  providers: [COMPONENTLISTSERVICE],
  bootstrap: [AppComponent]
})
export class AppModule { }
