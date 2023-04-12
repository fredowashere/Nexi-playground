import { Component, Input } from '@angular/core';
import { ConfEl } from '../../services/configuratore.service';

@Component({
  selector: 'app-paragraph-wrap',
  templateUrl: './paragraph-wrap.component.html',
  styleUrls: ['./paragraph-wrap.component.css']
})
export class ParagraphWrapComponent {

  @Input("confEl") confEl!: ConfEl;
}
