/* tslint:disable */
import { Component, Input } from '@angular/core';
import COMPONENT from './componentslist.json';
// import * as COMPONENTS from 'componentslist.json';
import { Injectable } from '@angular/core';
import { COMPONENTLISTSERVICE } from './componentlist.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Component({
 selector: 'nav-links',
 template: `
        <ng-container *ngFor="let component of components">
            <li *ngIf="component.url && component.type == type">
                <a class="nav-link" [routerLink]="component.url" routerLinkActive="active">
                    {{component.text}}
                </a>
            </li>
        </ng-container>
    `,
})

export class NavLinksComponent {

 components = COMPONENT.list;


  @Input() type: string;
}
