
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { AlertsComponent } from './alerts.component';
import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    DocWrapperModule,
    RouterModule.forChild([{ path: '', component: AlertsComponent }]),
  ],
  declarations: [
    AlertsComponent,
  ],
  exports: [AlertsComponent],
})
export class AlertsModule {}
