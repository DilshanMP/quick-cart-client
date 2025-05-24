import { Routes } from '@angular/router';
import {NotFoundPageComponent} from './componnent/not-found-page/not-found-page.component';

export const routes: Routes = [

  {path: '', redirectTo:'/process',pathMatch:'full'},
  {
    path:'process', loadChildren:
      () => import('./modules/process/process.module').then(e=>e.ProcessModule)
  },
  {path: '**', component: NotFoundPageComponent}
];
