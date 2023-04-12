import { Component, Input } from '@angular/core';
import { ConfEl } from '../../services/configuratore.service';

@Component({
  selector: 'app-command-wrap',
  templateUrl: './command-wrap.component.html',
  styleUrls: ['./command-wrap.component.css']
})
export class CommandWrapComponent {

  @Input("confEl") confEl!: ConfEl;
  
}
