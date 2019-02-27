
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { DocWrapper } from './doc-wrapper';

@NgModule({
  imports: [CommonModule, ClarityModule, RouterModule],
  declarations: [DocWrapper],
  exports: [DocWrapper],
})
export class DocWrapperModule {}
