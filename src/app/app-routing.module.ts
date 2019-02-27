
import { NgModule, Component } from '@angular/core';
// import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { SequencesComponent } from './sequences/sequences.component';
import { ComponentsComponent } from './components/components.component';

const appRoutes: Routes = [
  {
    path: 'resources',
    component: ResourcesComponent
  },
//   {
//     path: 'sequences',
//     component: SequencesComponent
//  },
  {
    path: 'components',
    component: ComponentsComponent
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      bodyClass: 'layout-home',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
