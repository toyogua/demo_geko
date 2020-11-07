import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OptionsComponent} from './options.component';
import {OptionsRoutingModule} from './options.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {FooterComponent} from '../../components/footer/footer.component';



@NgModule({
  declarations: [OptionsComponent, FooterComponent],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    OptionsRoutingModule,
    ReactiveFormsModule,
    IonicModule
  ]
})
export class OptionsModule { }
