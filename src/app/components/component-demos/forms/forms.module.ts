import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { FormsComponent } from './forms.component';
import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([{ path: '', component: FormsComponent }]),
    DocWrapperModule
  ],
  declarations: [FormsComponent],
  exports: [FormsComponent],
})
export class FormsDemoModule {}
