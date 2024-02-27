import { Component, Input } from "@angular/core";
import { WidgetModel, WidgetSpec } from "../../models/widget.models";

@Component({
    selector: "app-drop-list-item",
    templateUrl: "./drop-list-item.component.html",
    styleUrls: [ "./drop-list-item.component.css" ]
})
export class DropListItemComponent {

    @Input("dropList") dropList!: WidgetSpec<WidgetModel>[];
    
}