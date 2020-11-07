import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalculatorComponent} from './calculator.component';
import {CalculatorRoutingModule} from './calculator.routing.module';
import {IonicModule} from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from '../../components/footer/footer.component';



@NgModule({
  declarations: [CalculatorComponent, FooterComponent],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class CalculatorModule { }
