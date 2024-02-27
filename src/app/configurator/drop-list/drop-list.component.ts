import { Component, EventEmitter, Input, Output } from "@angular/core";
import { WidgetModel, WidgetSpec } from "../widgets/widget.models";
import { CdkDragDrop } from "@angular/cdk/drag-drop";

@Component({
    selector: "app-drop-list",
    templateUrl: "./drop-list.component.html",
    styleUrls: [ "./drop-list.component.css" ]
})
export class DropListComponent {

    @Input("dropListId") dropListId!: string;
    @Input("dropList") dropList!: WidgetSpec<WidgetModel>[];
    @Input("connectedDropListIds") connectedDropListIds!: string[];
    @Output("drop") dropEmitter = new EventEmitter<CdkDragDrop<any[]>>();

    drop(event: CdkDragDrop<any[]>) {
        this.dropEmitter.emit(event);
    }
}