import { NgModule } from '@angular/core';
import {ServiciosComponent} from './servicios.component';
import {ServiciosRoutingModule} from './servicios.routing.module';
import {IonicModule} from '@ionic/angular';
import {CardComponent} from '../../components/card/card.component';
import {CommonModule} from '@angular/common';
import {FooterComponent} from '../../components/footer/footer.component';

@NgModule({
  declarations: [ServiciosComponent, CardComponent, FooterComponent],
  imports: [
    ServiciosRoutingModule,
    IonicModule,
    CommonModule
  ]
})
export class ServiciosModule { }
