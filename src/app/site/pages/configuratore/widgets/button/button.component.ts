import { Component, Input } from '@angular/core';
import { ConfEl } from '../../services/configuratore.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input("confEl") confEl!: ConfEl;
  @Input("isShowcase") isShowcase = false;
  
}
