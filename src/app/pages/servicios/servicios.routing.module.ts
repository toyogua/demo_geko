import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ServiciosComponent} from './servicios.component';

const routes: Routes = [
  {
    path: '',
    component: ServiciosComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class ServiciosRoutingModule { }
