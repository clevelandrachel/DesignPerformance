import { ResourcesComponent } from './resources.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ResourcesRoutes: Routes = [
  {
  path: 'resources',
  component: ResourcesComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(ResourcesRoutes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }

