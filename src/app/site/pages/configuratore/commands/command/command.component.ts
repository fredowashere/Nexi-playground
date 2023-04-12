import { Component, Input } from '@angular/core';
import { ConfEl } from '../../services/configuratore.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent {

  @Input("confEl") confEl!: ConfEl;
  @Input("isShowcase") isShowcase = false;
  
}
