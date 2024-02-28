import { Component, Input } from '@angular/core';
import { WidgetModel, WidgetSpec } from '../../models/widget.models';
import { Subject } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-base-widget',
  templateUrl: './base-widget.component.html',
  styleUrls: ['./base-widget.component.css']
})
export class BaseWidgetComponent {
    @Input("spec") spec!: WidgetSpec<WidgetModel>;
    @Input("onDragDrop") onDragDrop$!: Subject<CdkDragDrop<any[]>>;
}