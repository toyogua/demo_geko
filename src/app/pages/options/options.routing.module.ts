import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OptionsComponent} from './options.component';

const routes: Routes = [
  {
    path: '',
    component: OptionsComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
})
export class OptionsRoutingModule { }
