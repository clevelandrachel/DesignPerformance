import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';


import { SpinnersComponent } from './spinners.component';
import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    DocWrapperModule,
    RouterModule.forChild([{ path: '', component: SpinnersComponent }])
  ],
  declarations: [SpinnersComponent],
  exports: [SpinnersComponent],
})
export class SpinnersModule {}

