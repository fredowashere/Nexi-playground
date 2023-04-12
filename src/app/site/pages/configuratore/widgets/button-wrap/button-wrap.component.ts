import { Component, Input } from '@angular/core';
import { ConfEl } from '../../services/configuratore.service';

@Component({
  selector: 'app-button-wrap',
  templateUrl: './button-wrap.component.html',
  styleUrls: ['./button-wrap.component.css']
})
export class ButtonWrapComponent {

  @Input("confEl") confEl!: ConfEl;
  
}
