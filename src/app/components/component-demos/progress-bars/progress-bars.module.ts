
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { ProgressBarsComponent } from './progress-bars.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    DocWrapperModule,
    RouterModule.forChild([{ path: '', component: ProgressBarsComponent }])
  ],
  declarations: [
    ProgressBarsComponent
  ],
  exports: [ProgressBarsComponent],
})
export class ProgressBarsModule {}
