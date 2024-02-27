import { Component, Input } from '@angular/core';
import { ButtonWidgetModel } from './button-widget.models';
import { WidgetSpec } from '../widget.models';

@Component({
  selector: 'app-button-widget',
  templateUrl: './button-widget.component.html',
  styleUrls: ['./button-widget.component.css']
})
export class ButtonWidgetComponent {

    @Input("spec") spec!: WidgetSpec<ButtonWidgetModel>;

}
