

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';

const componentRoutes: Routes = [
  {
    path: `components`,
    component: ComponentsComponent,
    data: {
      bodyClass: 'layout-component',
      browserTitle: 'component',
    },
    children: [
      {
        path: 'alerts',
        loadChildren: 'src/app/components/component-demos/alerts/alerts.module#AlertsModule',
        data: {
          bodyClass: 'page-alerts',
          browserTitle: 'Alerts',
        },
      },

      {
        path: 'download',
        loadChildren: 'src/app/components/component-demos/download/download.module#DownloadModule',
        data: {
          bodyClass: 'page-download',
          browserTitle: 'Download',
        },
      },
      {
        path: 'forms',
        loadChildren: 'src/app/components/component-demos/forms/forms.module#FormsModule',
        data: {
          bodyClass: 'page-forms',
          browserTitle: 'Forms',
        },
      },

      {
        path: 'progress',
        loadChildren: 'src/app/components/components-demos/progress-bars/progress-bars.module#ProgressBarsModule',
        data: {
          bodyClass: 'page-progress',
          browserTitle: 'Progress Bars',
        },
      },
      {
        path: 'spinners',
        loadChildren: 'src/app/components/components-demos/spinners/spinners.module#SpinnersModule',
        data: {
          bodyClass: 'page-spinners',
          browserTitle: 'Spinners',
        }
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(componentRoutes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
