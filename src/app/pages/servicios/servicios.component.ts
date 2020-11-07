import { Component, OnInit } from '@angular/core';
import {ServiciosService} from '../../services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {
data;
  constructor( private service: ServiciosService) { }

  ngOnInit() {
    this.getServicios();
  }
  getServicios(){
    this.service.fetchServicios().subscribe(res => this.data = res );
  }
}
