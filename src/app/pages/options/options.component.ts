import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {}
go( url: any){
    this.router.navigateByUrl(url);
}
}
