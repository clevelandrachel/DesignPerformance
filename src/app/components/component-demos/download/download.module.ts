import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { DownloadComponent } from './download.component';
import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([{ path: '', component: DownloadComponent }]),
    DocWrapperModule
  ],
  declarations: [DownloadComponent],
  exports: [DownloadComponent],
})
export class DownloadModule {}
