import { Component, Input } from '@angular/core';
import { CAKE } from 'src/models/cake';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent {

  @Input()
  cake?: CAKE

}
