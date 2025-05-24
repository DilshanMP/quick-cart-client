import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContextComponent} from './context/context.component';
import {HomepageComponent} from './compponets/homepage/homepage.component';

const routes: Routes = [
  {path : '',redirectTo:'/process/context',pathMatch:'full'},
  {path:'context' , component:ContextComponent, children: [
      {path : '',redirectTo:'/process/context/home',pathMatch:'full'},
      {path :'home', component:HomepageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
