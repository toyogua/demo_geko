import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

class Props {
  servicio: any;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnChanges {
@Input() servicio;
state: Props = new Props();
  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    Object.keys(changes).forEach((key) => {
      if (changes[key].currentValue) {
        this.state[key] = changes[key].currentValue;
      }
    });
  }
}
