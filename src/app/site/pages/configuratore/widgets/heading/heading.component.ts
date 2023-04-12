import { Component, Input } from '@angular/core';
import { ConfEl } from '../../services/configuratore.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent {

  @Input("confEl") confEl!: ConfEl;
  @Input("isShowcase") isShowcase = false;
  
}
