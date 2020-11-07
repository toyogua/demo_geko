import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CalculatorComponent} from './calculator.component';


const routes: Routes = [
  {
    path: '',
    component: CalculatorComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class CalculatorRoutingModule { }
