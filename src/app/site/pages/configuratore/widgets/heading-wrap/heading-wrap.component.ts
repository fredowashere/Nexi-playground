import { Component, Input } from '@angular/core';
import { ConfEl } from '../../services/configuratore.service';

@Component({
  selector: 'app-heading-wrap',
  templateUrl: './heading-wrap.component.html',
  styleUrls: ['./heading-wrap.component.css']
})
export class HeadingWrapComponent {

  @Input("confEl") confEl!: ConfEl;
  
}
