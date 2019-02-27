import { ModuleWithProviders } from '@angular/core';
import { SequencesComponent } from './sequences.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const Routes: Routes = [
  {
  path: '',
  component: SequencesComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class SequencesRoutingModule { }

